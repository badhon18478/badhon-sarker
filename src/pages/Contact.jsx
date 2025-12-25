import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Loader2,
  MessageSquare,
  Sparkles,
  AlertCircle,
} from 'lucide-react';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // নিচের ৩টি জিনিস আপনার EmailJS ড্যাশবোর্ড থেকে কপি করে বসান
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus('success');
        e.target.reset();
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
    <section className="min-h-screen bg-white text-slate-900 py-20 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-4 border border-blue-100"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">
              Get In Touch
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Let's Start a <span className="text-blue-600">Conversation</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Info Cards */}
          <div className="lg:col-span-4 space-y-4">
            <ContactCard
              icon={<Mail className="text-blue-600" />}
              title="Email Me"
              detail="badhonsarker1844@gmail.com"
              link="mailto:yourname@gmail.com"
            />
            <ContactCard
              icon={<Phone className="text-green-600" />}
              title="Call Me"
              detail="+880 17XX-XXXXXX"
              link="tel:+8801700000000"
            />
            <ContactCard
              icon={<MapPin className="text-red-600" />}
              title="Location"
              detail="Dhaka, Bangladesh"
            />
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-8 bg-gray-50 border border-gray-200 p-8 md:p-12 rounded-[2rem] shadow-sm"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">
                    Full Name
                  </label>
                  <input
                    name="from_name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full bg-white border border-gray-300 rounded-xl px-5 py-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">
                    Email Address
                  </label>
                  <input
                    name="from_email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white border border-gray-300 rounded-xl px-5 py-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="How can I help you?"
                  className="w-full bg-white border border-gray-300 rounded-xl px-5 py-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none"
                />
              </div>

              <button
                disabled={loading}
                className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] disabled:opacity-70"
              >
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <Send size={20} />
                )}
                {loading ? 'SENDING...' : 'SEND MESSAGE'}
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-4 rounded-xl bg-green-50 text-green-700 border border-green-200 flex items-center gap-2"
                  >
                    <CheckCircle size={20} /> Message Sent! Check your Gmail
                    now.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-4 rounded-xl bg-red-50 text-red-700 border border-red-200 flex items-center gap-2"
                  >
                    <AlertCircle size={20} /> Failed to send. Please check your
                    EmailJS IDs.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({ icon, title, detail, link }) => (
  <a
    href={link}
    className="block p-6 bg-white border border-gray-200 rounded-2xl hover:border-blue-500 hover:shadow-md transition-all group"
  >
    <div className="flex items-center gap-4">
      <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
          {title}
        </p>
        <p className="text-lg font-bold text-slate-800">{detail}</p>
      </div>
    </div>
  </a>
);

export default Contact;
