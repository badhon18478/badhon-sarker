import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, Mail, MessageSquare, Sparkles, Loader2 } from 'lucide-react';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  // ✅ EmailJS Configuration
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_d200kul',
    TEMPLATE_ID: 'template_8pebt6y',
    PUBLIC_KEY: 'y-L_7djOy6nE2E1vK',
    TO_EMAIL: 'badhonsarker1844@gmail.com',
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      const templateParams = {
        from_name: formData.from_name,
        from_email: formData.from_email,
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        message: formData.message,
        date: new Date().toLocaleString(),
      };

      // Send email without showing any alerts or errors
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      // Silent success - no alerts, no notifications
      // Just reset the form
      setFormData({
        from_name: '',
        from_email: '',
        message: '',
      });
    } catch (error) {
      // Silent error - no alerts, no error messages shown to user
      console.log('Email sending failed silently');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50 text-gray-900 py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-6 py-3 rounded-full mb-6 border border-blue-200 shadow-sm"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-widest">
              Email Contact
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            Send Me an{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Email
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            আপনার মেসেজ সরাসরি আমার Email এ পাঠানো হবে
          </motion.p>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl p-8 md:p-10 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl">
              <MessageSquare className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                Send Email Message
              </h3>
              <p className="text-gray-600">
                Fill the form below to send direct email
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <span>Your Name</span>
                  <span className="text-red-500">*</span>
                </label>
                <input
                  name="from_name"
                  type="text"
                  required
                  value={formData.from_name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full bg-white border border-gray-300 rounded-xl px-5 py-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all placeholder-gray-400"
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <span>Your Email</span>
                  <span className="text-red-500">*</span>
                </label>
                <input
                  name="from_email"
                  type="email"
                  required
                  value={formData.from_email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full bg-white border border-gray-300 rounded-xl px-5 py-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all placeholder-gray-400"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <span>Your Message</span>
                <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                rows="6"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project, ideas, or questions..."
                className="w-full bg-white border border-gray-300 rounded-xl px-5 py-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all placeholder-gray-400 resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 transition-all disabled:opacity-70 shadow-lg hover:shadow-xl"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>SENDING...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>SEND EMAIL</span>
                </>
              )}
            </motion.button>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                By submitting, this message will be sent directly to{' '}
                {EMAILJS_CONFIG.TO_EMAIL}
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
