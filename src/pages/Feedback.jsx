import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
  Send,
  CheckCircle,
  AlertCircle,
  Loader,
  Heart,
  TrendingUp,
} from 'lucide-react';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rating: 5,
  });
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);
  const [stats, setStats] = useState(null);

  const API_URL = 'https://badhon-server.vercel.app/api';

  // Helper for notifications
  const showNotification = useCallback((message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  }, []);

  // Memoized fetch functions to prevent infinite loops in useEffect
  const fetchFeedbacks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/feedback?limit=10`);
      const data = await response.json();
      if (data.success) setFeedbacks(data.data);
    } catch (error) {
      showNotification('Failed to load feedbacks', 'error');
    } finally {
      setLoading(false);
    }
  }, [showNotification, API_URL]);

  const fetchStats = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/feedback/stats`);
      const data = await response.json();
      if (data.success) setStats(data.data);
    } catch (error) {
      console.error('Stats error:', error);
    }
  }, [API_URL]);

  useEffect(() => {
    fetchFeedbacks();
    fetchStats();
  }, [fetchFeedbacks, fetchStats]);

  const handleSubmit = async e => {
    e.preventDefault(); // Prevent default form behavior

    // Basic Validation
    const { name, email, message, rating } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim() || !email.trim() || !message.trim()) {
      showNotification('Please fill all required fields', 'error');
      return;
    }

    if (!emailRegex.test(email)) {
      showNotification('Please enter a valid email address', 'error');
      return;
    }

    if (message.trim().length < 10) {
      showNotification('Message must be at least 10 characters', 'error');
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      const data = await response.json();

      if (data.success) {
        showNotification(
          'Feedback submitted! It will appear after approval.',
          'success'
        );
        setFormData({ name: '', email: '', message: '', rating: 5 });
        fetchStats(); // Update stats immediately
      } else {
        showNotification(data.message || 'Submission failed', 'error');
      }
    } catch (error) {
      showNotification('Network error. Please check your connection.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = dateString => {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 px-6 py-3 rounded-full mb-6">
            <Heart className="w-5 h-5 text-pink-400 animate-pulse" />
            <span className="font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Your Opinion Matters
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Feedback
            </span>
          </h1>
          <p className="text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Share your experience and help me improve
          </p>
        </motion.div>

        {/* Stats Grid */}
        {stats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            <StatCard
              label="Total Reviews"
              value={stats.approved}
              color="from-pink-500 to-purple-600"
            />
            <StatCard
              label="Avg Rating"
              value={stats.averageRating}
              color="from-yellow-500 to-orange-600"
            />
            <StatCard
              label="Satisfaction"
              value="100%"
              color="from-green-500 to-emerald-600"
            />
            <StatCard
              label="Pending"
              value={stats.pending}
              color="from-cyan-500 to-blue-600"
            />
          </motion.div>
        )}

        {/* Notifications */}
        <AnimatePresence>
          {notification && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4"
            >
              <div
                className={`flex items-center gap-3 p-4 rounded-2xl shadow-2xl backdrop-blur-xl border ${
                  notification.type === 'success'
                    ? 'bg-green-500/90 border-green-400'
                    : 'bg-red-500/90 border-red-400'
                } text-white`}
              >
                {notification.type === 'success' ? (
                  <CheckCircle size={24} />
                ) : (
                  <AlertCircle size={24} />
                )}
                <span className="font-semibold">{notification.message}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-700 sticky top-32">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Heart className="text-pink-500" /> Leave Feedback
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                    Your Name *
                  </label>
                  <input
                    required
                    disabled={submitting}
                    type="text"
                    value={formData.name}
                    onChange={e =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-900 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 transition-all dark:text-white border border-slate-200 dark:border-slate-700"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                    Email Address *
                  </label>
                  <input
                    required
                    disabled={submitting}
                    type="email"
                    value={formData.email}
                    onChange={e =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-900 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 transition-all dark:text-white border border-slate-200 dark:border-slate-700"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 text-slate-700 dark:text-slate-300">
                    Rating *
                  </label>
                  <div className="flex gap-2 justify-center bg-slate-100 dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                    {[1, 2, 3, 4, 5].map(star => (
                      <motion.button
                        key={star}
                        type="button"
                        disabled={submitting}
                        onClick={() =>
                          setFormData({ ...formData, rating: star })
                        }
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`Rate ${star} stars`}
                      >
                        <Star
                          className={`${
                            star <= formData.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-slate-400'
                          } transition-all`}
                          size={32}
                        />
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                    Your Feedback *
                  </label>
                  <textarea
                    required
                    disabled={submitting}
                    value={formData.message}
                    onChange={e =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-900 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 transition-all resize-none dark:text-white border border-slate-200 dark:border-slate-700"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-xl font-bold text-white flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {submitting ? (
                    <Loader className="animate-spin" size={20} />
                  ) : (
                    <Send size={20} />
                  )}
                  {submitting ? 'Submitting...' : 'Submit Feedback'}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Feedbacks List Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <TrendingUp className="text-purple-500" /> Recent Feedback
              </h2>
              <span className="text-sm font-medium text-slate-500">
                {feedbacks.length} Approved
              </span>
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 gap-4">
                <Loader className="animate-spin text-purple-500" size={48} />
                <p className="text-slate-500 animate-pulse">
                  Loading testimonials...
                </p>
              </div>
            ) : feedbacks.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="space-y-4">
                {feedbacks.map((f, i) => (
                  <FeedbackCard
                    key={f._id || i}
                    feedback={f}
                    index={i}
                    formatDate={formatDate}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Sub-components for cleaner code
const StatCard = ({ label, value, color }) => (
  <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 text-center border border-slate-200 dark:border-slate-700 shadow-sm">
    <div
      className={`text-4xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent mb-2`}
    >
      {value}
    </div>
    <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">
      {label}
    </div>
  </div>
);

const FeedbackCard = ({ feedback, index, formatDate }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md border border-slate-200 dark:border-slate-700"
  >
    <div className="flex items-start justify-between mb-4">
      <div>
        <h3 className="font-bold text-lg text-slate-900 dark:text-white">
          {feedback.name}
        </h3>
        <p className="text-xs text-slate-500">
          {formatDate(feedback.createdAt)}
        </p>
      </div>
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={
              i < feedback.rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-slate-300'
            }
          />
        ))}
      </div>
    </div>
    <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic">
      "{feedback.message}"
    </p>
  </motion.div>
);

const EmptyState = () => (
  <div className="text-center py-20 bg-white dark:bg-slate-800 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700">
    <Star className="mx-auto mb-4 text-slate-300" size={64} />
    <p className="text-xl text-slate-500">
      No approved reviews yet. Be the first!
    </p>
  </div>
);

export default Feedback;
