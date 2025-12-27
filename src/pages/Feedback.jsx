import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
  Send,
  CheckCircle,
  AlertCircle,
  Loader,
  Heart,
  MessageSquare,
  Users,
  Award,
  Clock,
  Upload,
  X,
} from 'lucide-react';

const StatCard = ({ label, value, icon: Icon }) => (
  <div className="bg-slate-800/50 backdrop-blur rounded-lg p-3 border border-slate-700/50">
    <div className="flex items-center gap-2 mb-1">
      <Icon className="w-4 h-4 text-cyan-400" />
      <span className="text-xs text-slate-400">{label}</span>
    </div>
    <div className="text-xl font-bold text-white">{value}</div>
  </div>
);

const FeedbackCard = ({ feedback, formatDate }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -5 }}
    className="bg-slate-800/50 backdrop-blur rounded-xl p-5 border border-slate-700/50 hover:border-cyan-500/50 transition-all"
  >
    <div className="flex items-start gap-4 mb-3">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center flex-shrink-0">
        <Users className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-white text-lg">{feedback.name}</h3>
        <p className="text-xs text-slate-400">
          {formatDate(feedback.createdAt)}
        </p>
        <div className="flex gap-0.5 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < feedback.rating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-slate-600'
              }
            />
          ))}
        </div>
      </div>
    </div>

    {feedback.image && (
      <div className="mb-3">
        <img
          src={feedback.image}
          alt="Feedback"
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
    )}

    <p className="text-sm text-slate-300 leading-relaxed italic">
      "{feedback.message}"
    </p>
  </motion.div>
);

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rating: 5,
    image: '',
  });
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);
  const [stats, setStats] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  const API_URL = 'https://badhon-server.vercel.app/api';
  const IMGBB_API_KEY = '9fa3cb8e4f87f22580c3c32954a7c123';

  const showNotification = useCallback((message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 4000);
  }, []);

  const fetchFeedbacks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/feedback?limit=10`);
      const data = await response.json();
      if (data.success) {
        // Only show approved feedback
        const approvedFeedbacks = data.data.filter(
          f => f.status === 'approved'
        );
        setFeedbacks(approvedFeedbacks);
      }
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

  const handleImageUpload = async e => {
    const file = e.target.files[0];
    if (!file) return;

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      showNotification('Image size should be less than 5MB', 'error');
      return;
    }

    // Check file type
    if (!file.type.startsWith('image/')) {
      showNotification('Please upload a valid image file', 'error');
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setFormData(prev => ({ ...prev, image: data.data.url }));
        setImagePreview(data.data.url);
        showNotification('Image uploaded successfully!', 'success');
      } else {
        showNotification('Image upload failed', 'error');
      }
    } catch (error) {
      showNotification('Image upload error', 'error');
    } finally {
      setUploading(false);
    }
  };

  const removeImage = () => {
    setFormData(prev => ({ ...prev, image: '' }));
    setImagePreview(null);
  };

  const handleSubmit = async () => {
    const { name, email, message, rating, image } = formData;
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
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          rating,
          image: image || '',
          status: 'pending',
        }),
      });

      const data = await response.json();

      if (data.success) {
        showNotification(
          'Feedback submitted! It will appear after approval.',
          'success'
        );
        setFormData({ name: '', email: '', message: '', rating: 5, image: '' });
        setImagePreview(null);
        fetchFeedbacks();
        fetchStats();
      } else {
        showNotification(data.message || 'Submission failed', 'error');
      }
    } catch (error) {
      showNotification('Network error. Please try again.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = dateString => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full mb-4">
            <Heart className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Share Your Thoughts
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Feedback
            </span>
          </h1>
          <p className="text-slate-400">Your opinion helps us improve</p>
        </div>

        {/* Stats */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            <StatCard label="Total" value={stats.approved} icon={Users} />
            <StatCard
              label="Rating"
              value={`${stats.averageRating?.toFixed(1) || 0}/5`}
              icon={Star}
            />
            <StatCard label="Satisfaction" value="100%" icon={Award} />
            <StatCard label="Pending" value={stats.pending} icon={Clock} />
          </div>
        )}

        {/* Notification */}
        <AnimatePresence>
          {notification && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4"
            >
              <div
                className={`flex items-center gap-3 p-4 rounded-lg shadow-xl backdrop-blur ${
                  notification.type === 'success'
                    ? 'bg-emerald-500/90 text-white'
                    : 'bg-red-500/90 text-white'
                }`}
              >
                {notification.type === 'success' ? (
                  <CheckCircle size={20} />
                ) : (
                  <AlertCircle size={20} />
                )}
                <span className="font-medium">{notification.message}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div className="grid md:grid-cols-5 gap-6">
          {/* Form */}
          <div className="md:col-span-2 bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Leave Feedback</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Name *
                </label>
                <input
                  disabled={submitting}
                  type="text"
                  value={formData.name}
                  onChange={e =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-slate-900/50 rounded-lg outline-none focus:ring-2 focus:ring-cyan-500/50 text-white border border-slate-700/50 disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Email *
                </label>
                <input
                  disabled={submitting}
                  type="email"
                  value={formData.email}
                  onChange={e =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-slate-900/50 rounded-lg outline-none focus:ring-2 focus:ring-cyan-500/50 text-white border border-slate-700/50 disabled:opacity-50"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Rating *
                </label>
                <div className="flex gap-2 justify-center bg-slate-900/30 p-4 rounded-lg">
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={star}
                      type="button"
                      disabled={submitting}
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="p-1 hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`${
                          star <= formData.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-slate-500'
                        } transition-colors`}
                        size={28}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Upload Image (Optional)
                </label>
                {!imagePreview ? (
                  <label className="block">
                    <div className="border-2 border-dashed border-slate-700 rounded-lg p-6 text-center cursor-pointer hover:border-cyan-500/50 transition-all">
                      {uploading ? (
                        <div className="flex flex-col items-center gap-2">
                          <Loader className="w-8 h-8 text-cyan-400 animate-spin" />
                          <span className="text-sm text-slate-400">
                            Uploading...
                          </span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-2">
                          <Upload className="w-8 h-8 text-slate-400" />
                          <span className="text-sm text-slate-400">
                            Click to upload image
                          </span>
                          <span className="text-xs text-slate-500">
                            Max 5MB
                          </span>
                        </div>
                      )}
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={uploading || submitting}
                      className="hidden"
                    />
                  </label>
                ) : (
                  <div className="relative">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <button
                      onClick={removeImage}
                      disabled={submitting}
                      className="absolute top-2 right-2 p-1 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
                    >
                      <X className="w-4 h-4 text-white" />
                    </button>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Message *
                </label>
                <textarea
                  disabled={submitting}
                  value={formData.message}
                  onChange={e =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-2.5 bg-slate-900/50 rounded-lg outline-none focus:ring-2 focus:ring-cyan-500/50 resize-none text-white border border-slate-700/50 disabled:opacity-50"
                  placeholder="Share your thoughts..."
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <Loader className="animate-spin w-5 h-5" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Submit Feedback</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Feedback List */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Recent Feedback</h2>
              <span className="ml-auto text-lg font-bold text-cyan-400">
                {feedbacks.length}
              </span>
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 bg-slate-800/30 rounded-xl border border-slate-700/30">
                <Loader className="animate-spin text-cyan-400 w-12 h-12 mb-4" />
                <p className="text-slate-400">Loading feedback...</p>
              </div>
            ) : feedbacks.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 bg-slate-800/30 rounded-xl border border-slate-700/30 text-center">
                <MessageSquare className="w-16 h-16 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  No Feedback Yet
                </h3>
                <p className="text-slate-400">
                  Be the first to share your experience!
                </p>
              </div>
            ) : (
              <div className="grid gap-4 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar">
                {feedbacks.map((f, i) => (
                  <FeedbackCard
                    key={f._id || i}
                    feedback={f}
                    formatDate={formatDate}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(51, 65, 85, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(34, 211, 238, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(34, 211, 238, 0.7);
        }
      `}</style>
    </div>
  );
};

export default Feedback;
