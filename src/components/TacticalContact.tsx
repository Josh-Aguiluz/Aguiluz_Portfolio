import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Linkedin, Github, Twitter, Radio } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface TacticalContactProps {
  theme: 'stealth' | 'light';
}

export function TacticalContact({ theme }: TacticalContactProps) {
  const isDark = theme === 'stealth';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('TRANSMISSION RECEIVED. DEPLOYING RESPONSE PROTOCOL.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: Mail, label: 'EMAIL', value: 'josh.dizon.aguiluz25@gmail.com', link: 'mailto:josh.dizon.aguiluz25@gmail.com' },
    { icon: Phone, label: 'DIRECT LINE', value: '+1 (555) 000-0000', link: 'tel:+15550000000' },
    { icon: MapPin, label: 'LOCATION', value: 'Your City, State', link: null },
  ];

  const socialLinks = [
    { icon: Github, label: 'GITHUB', url: 'https://github.com' },
    { icon: Linkedin, label: 'LINKEDIN', url: 'https://linkedin.com' },
    { icon: Twitter, label: 'TWITTER', url: 'https://twitter.com' },
  ];

  return (
    <section id="contact" className={`min-h-screen py-20 relative overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 halftone" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-20 lg:pb-0">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <Radio className="text-red-600" size={40} />
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl tracking-wider transition-colors duration-500 ${
              isDark ? 'text-white' : 'text-black'
            }`} style={{ fontFamily: 'Teko, sans-serif' }}>
              ESTABLISH COMMS
            </h2>
            <div className="h-1 flex-1 bg-red-600" />
          </div>
          <p className={`text-lg transition-colors duration-500 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`} style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            OPEN CHANNEL / READY TO DEPLOY
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Mission Brief */}
            <div className={`border-l-4 border-red-600 p-8 cut-corner-br transition-colors duration-500 ${
              isDark ? 'bg-zinc-900' : 'bg-white border-2 border-red-600/30'
            }`}>
              <h3 className={`text-2xl mb-4 tracking-wide transition-colors duration-500 ${
                isDark ? 'text-white' : 'text-black'
              }`} style={{ fontFamily: 'Teko, sans-serif' }}>
                MISSION BRIEF
              </h3>
              <p className={`leading-relaxed mb-4 transition-colors duration-500 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`} style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Introduction text about availability and project interests.
              </p>
              <p className={`leading-relaxed transition-colors duration-500 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`} style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Additional contact information or response time details.
              </p>
              
              {/* Status indicator */}
              <div className="flex items-center gap-3 mt-6 pt-6 border-t-2 border-red-600/30">
                <div className="relative">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
                </div>
                <span className="text-green-500 tracking-wider" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                  STATUS: AVAILABLE FOR DEPLOYMENT
                </span>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className={`border-2 border-red-600/30 p-4 cut-corner-tl hover:border-red-600 transition-colors group ${
                      isDark ? 'bg-zinc-900' : 'bg-white'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-600 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="text-xs text-red-600 mb-1 tracking-widest" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                          {info.label}
                        </div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className={`hover:text-red-600 transition-colors tracking-wide ${
                              isDark ? 'text-white' : 'text-black'
                            }`}
                            style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className={`tracking-wide transition-colors duration-500 ${
                            isDark ? 'text-white' : 'text-black'
                          }`} style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                            {info.value}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className={`text-xl mb-4 tracking-wide transition-colors duration-500 ${
                isDark ? 'text-white' : 'text-black'
              }`} style={{ fontFamily: 'Teko, sans-serif' }}>
                TACTICAL NETWORKS
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-zinc-900 border-2 border-red-600/30 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all group"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="text-red-600 group-hover:text-white transition-colors" size={24} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-zinc-900 border-4 border-red-600/30 cut-corner p-8 lg:p-10 relative overflow-hidden">
              {/* Form header */}
              <div className="mb-8 pb-6 border-b-2 border-red-600/30">
                <h3 className="text-2xl text-white mb-2 tracking-wide" style={{ fontFamily: 'Teko, sans-serif' }}>
                  TRANSMISSION FORM
                </h3>
                <p className="text-gray-400 text-sm tracking-wider" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  ALL FIELDS REQUIRED FOR SECURE TRANSMISSION
                </p>
              </div>

              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-red-600 mb-2 tracking-widest text-sm" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                    OPERATIVE NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black text-white border-2 border-red-600/30 focus:border-red-600 outline-none transition-all tracking-wide"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-red-600 mb-2 tracking-widest text-sm" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                    COMMUNICATION CHANNEL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black text-white border-2 border-red-600/30 focus:border-red-600 outline-none transition-all tracking-wide"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                    placeholder="your.email@domain.com"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-red-600 mb-2 tracking-widest text-sm" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                    MISSION DETAILS
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black text-white border-2 border-red-600/30 focus:border-red-600 outline-none transition-all resize-none tracking-wide"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                    placeholder="Describe your project or mission requirements..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-red-600 text-white tracking-widest cut-corner relative overflow-hidden group"
                  style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <Send size={20} />
                    TRANSMIT MESSAGE
                    <div className="flex gap-1">
                      <motion.div 
                        className="w-1 h-4 bg-white"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div 
                        className="w-1 h-4 bg-white"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div 
                        className="w-1 h-4 bg-white"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                    style={{ opacity: 0.1 }}
                  />
                </motion.button>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-red-600" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-red-600" />
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-12 border-t-2 border-red-600/30 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-red-600" />
            <p className="text-gray-500 tracking-widest text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              © YEAR JOSH ANDREI AGUILUZ - FULL STACK OPERATIVE
            </p>
            <div className="h-px w-16 bg-red-600" />
          </div>
          <p className="text-gray-600 text-xs tracking-wider" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            BUILT WITH TACTICAL PRECISION / DEPLOYED WITH REACT
          </p>
        </motion.div>
      </div>

      {/* Decorative tactical elements */}
      <div className="absolute top-20 right-8 w-32 h-32 border-2 border-red-600/10 rotate-45 hidden xl:block" />
      <div className="absolute bottom-20 left-8 w-24 h-24 border-2 border-red-600/10 hidden xl:block" />
    </section>
  );
}