import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Loader2,
  AlertCircle,
  Sparkles,
  MessageSquare,
} from 'lucide-react';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // ✅ EmailJS Configuration - Get these from https://www.emailjs.com/
  const EMAILJS_SERVICE_ID = 'service_d200kul';
  const EMAILJS_TEMPLATE_ID = 'template_y3t732f';
  const EMAILJS_PUBLIC_KEY = 'y-L_7djOy6nE2E1vK';

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill all required fields');
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch(
        'https://api.emailjs.com/api/v1.0/email/send',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: EMAILJS_SERVICE_ID,
            template_id: EMAILJS_TEMPLATE_ID,
            user_id: EMAILJS_PUBLIC_KEY,
            template_params: {
              from_name: formData.name,
              from_email: formData.email,
              message: formData.message,
              to_email: 'badhonsarker1844@gmail.com',
            },
          }),
        }
      );

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-purple-600/15 border-2 border-cyan-500/40 text-cyan-300 px-6 py-3 rounded-full mb-6 shadow-xl shadow-cyan-500/20 backdrop-blur-sm"
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-widest">
              Get In Touch
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight"
          >
            Let's Start a{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Conversation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Have a project in mind? Let's collaborate and bring your ideas to
            life
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-4 space-y-4"
          >
            <ContactCard
              icon={<Mail className="text-cyan-400" size={24} />}
              title="Email"
              detail="badhonsarker1844@gmail.com"
              link="mailto:badhonsarker1844@gmail.com"
            />
            <ContactCard
              icon={<Phone className="text-blue-400" size={24} />}
              title="Phone"
              detail="+8801738670618"
              link="tel:+8801738670618"
            />
            <ContactCard
              icon={<MapPin className="text-purple-400" size={24} />}
              title="Location"
              detail="Dhaka, Bangladesh"
            />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-8"
          >
            <div className="bg-slate-950/80 backdrop-blur-3xl border-2 border-cyan-500/20 rounded-3xl p-8 md:p-10 shadow-2xl shadow-cyan-500/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-purple-600/15 border border-cyan-500/40 rounded-2xl shadow-lg shadow-cyan-500/20">
                  <MessageSquare className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Send Message
                  </h3>
                  <p className="text-slate-400">
                    Fill out the form and I'll get back to you
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300 ml-1">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-slate-900/50 border-2 border-cyan-500/30 rounded-2xl px-5 py-4 text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 outline-none transition-all backdrop-blur-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300 ml-1">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-slate-900/50 border-2 border-cyan-500/30 rounded-2xl px-5 py-4 text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 outline-none transition-all backdrop-blur-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300 ml-1">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full bg-slate-900/50 border-2 border-cyan-500/30 rounded-2xl px-5 py-4 text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 outline-none transition-all resize-none backdrop-blur-sm"
                  />
                </div>

                <motion.button
                  onClick={handleSubmit}
                  disabled={loading}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-700 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-500 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 ring-2 ring-cyan-500/40 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>SENDING...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>SEND MESSAGE</span>
                    </>
                  )}
                </motion.button>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500/40 text-green-300 rounded-2xl flex items-center gap-3 shadow-lg shadow-green-500/20"
                    >
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <p className="font-bold">Message Sent Successfully!</p>
                        <p className="text-sm text-green-400/80">
                          I'll get back to you soon.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 bg-gradient-to-r from-red-500/20 to-rose-500/20 border-2 border-red-500/40 text-red-300 rounded-2xl flex items-center gap-3 shadow-lg shadow-red-500/20"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <p className="font-bold">Failed to Send</p>
                        <p className="text-sm text-red-400/80">
                          Please check EmailJS configuration.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Info Box */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-600/10 border-2 border-cyan-500/30 rounded-2xl backdrop-blur-sm"
        >
          <h4 className="font-bold text-cyan-300 mb-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Quick Setup Guide:
          </h4>
          <ol className="space-y-2 text-slate-400 text-sm">
            <li className="flex gap-2">
              <span className="text-cyan-400 font-bold">1.</span>
              <span>
                Sign up at{' '}
                <a
                  href="https://www.emailjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  emailjs.com
                </a>{' '}
                with{' '}
                <strong className="text-white">
                  badhonsarker1844@gmail.com
                </strong>
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400 font-bold">2.</span>
              <span>
                Add Gmail service and get your{' '}
                <strong className="text-white">Service ID</strong>
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400 font-bold">3.</span>
              <span>
                Create email template and get{' '}
                <strong className="text-white">Template ID</strong>
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400 font-bold">4.</span>
              <span>
                Copy <strong className="text-white">Public Key</strong> from
                Account settings
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400 font-bold">5.</span>
              <span>Replace the 3 IDs in the code above ☝️</span>
            </li>
          </ol>
        </motion.div> */}
      </div>
    </section>
  );
};

const ContactCard = ({ icon, title, detail, link }) => (
  <motion.a
    href={link}
    target={link ? '_blank' : undefined}
    rel={link ? 'noopener noreferrer' : undefined}
    whileHover={{ scale: 1.02, y: -2 }}
    className="block p-6 bg-slate-950/80 backdrop-blur-3xl border-2 border-cyan-500/20 hover:border-cyan-500/40 rounded-2xl transition-all shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/20 group"
  >
    <div className="flex items-center gap-4">
      <div className="p-3 bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-purple-600/15 border border-cyan-500/30 rounded-xl group-hover:border-cyan-500/50 transition-all shadow-lg shadow-cyan-500/10">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
          {title}
        </p>
        <p className="text-base font-bold text-white">{detail}</p>
      </div>
    </div>
  </motion.a>
);

export default Contact;
