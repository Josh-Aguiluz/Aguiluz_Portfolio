import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

export default function ModernContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 dot-grid-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20 glass-card p-12 rounded-3xl">
          <div className="flex items-center gap-4 mb-4">
            <Mail className="w-8 h-8 text-blue-500" />
            <p className="font-mono text-[24px] text-slate-600 dark:text-slate-400">
              // Get in Touch
            </p>
          </div>
          <h2 className="text-[56px] md:text-[72px] text-slate-900 dark:text-slate-50 mb-6">
            Initialize<br />Handshake
          </h2>
          <p className="text-[24px] text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed">
            Whether you have a project in mind or just want to connect, I'm always open to discussing new opportunities and collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info - Left Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Email Card */}
            <div className="glass-card p-8 rounded-3xl hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
                  <Mail className="w-6 h-6 text-blue-500" />
                </div>
                <span className="font-mono text-[20px] text-slate-600 dark:text-slate-400">
                  Email
                </span>
              </div>
              <a
                href="mailto:hello@example.com"
                className="text-[24px] text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
              >
                hello@example.com
              </a>
            </div>

            {/* Location Card */}
            <div className="glass-card p-8 rounded-3xl hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-500/10 dark:bg-green-500/20 rounded-xl">
                  <MapPin className="w-6 h-6 text-green-500" />
                </div>
                <span className="font-mono text-[20px] text-slate-600 dark:text-slate-400">
                  Location
                </span>
              </div>
              <p className="text-[24px] text-slate-900 dark:text-slate-100">
                New York, USA
              </p>
              <p className="text-[18px] text-slate-600 dark:text-slate-400 mt-2">
                Available for remote work
              </p>
            </div>

            {/* Social Links Card */}
            <div className="glass-card p-8 rounded-3xl hover:scale-105 transition-transform duration-300">
              <div className="mb-4">
                <span className="font-mono text-[20px] text-slate-600 dark:text-slate-400">
                  Social
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="#"
                  className="flex items-center gap-3 text-[24px] text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                >
                  <Github className="w-6 h-6" />
                  <span className="font-mono">GitHub</span>
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-[24px] text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="font-mono">LinkedIn</span>
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-[24px] text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                >
                  <Twitter className="w-6 h-6" />
                  <span className="font-mono">Twitter</span>
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3 glass-card p-12 rounded-3xl">
            <h3 className="text-[36px] text-slate-900 dark:text-slate-50 mb-8">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block font-mono text-[20px] text-slate-700 dark:text-slate-300 mb-3">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white/50 dark:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-700 rounded-xl text-[24px] text-slate-900 dark:text-slate-100 focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-colors placeholder:text-slate-400"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-mono text-[20px] text-slate-700 dark:text-slate-300 mb-3">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white/50 dark:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-700 rounded-xl text-[24px] text-slate-900 dark:text-slate-100 focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-colors placeholder:text-slate-400"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block font-mono text-[20px] text-slate-700 dark:text-slate-300 mb-3">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white/50 dark:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-700 rounded-xl text-[24px] text-slate-900 dark:text-slate-100 focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-colors placeholder:text-slate-400"
                  placeholder="Project inquiry"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-mono text-[20px] text-slate-700 dark:text-slate-300 mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-white/50 dark:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-700 rounded-xl text-[24px] text-slate-900 dark:text-slate-100 focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-colors resize-none placeholder:text-slate-400"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-10 py-5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-[24px] font-mono rounded-xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-3 group"
              >
                <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-slate-200 dark:border-slate-700">
          <div className="glass-card p-8 rounded-3xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="font-mono text-[20px] text-slate-600 dark:text-slate-400">
                © 2024 [Your Name]. All rights reserved.
              </p>
              <p className="font-mono text-[20px] text-slate-600 dark:text-slate-400">
                Designed & Developed with care
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
