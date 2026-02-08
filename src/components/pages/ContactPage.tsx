import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="min-h-screen py-32 dot-matrix-bg relative bg-[#FDF5E7] dark:bg-[#1A1715]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-8 md:px-10 py-3 md:py-4 bg-[#A47A2D] dark:bg-[#A47A2D] rounded-full mb-8">
            <p className="font-mono text-[20px] md:text-[24px] font-bold text-white dark:text-[#1A1715] uppercase tracking-wider">
              // Contact
            </p>
          </div>
          <h1 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-[56px] sm:text-6xl lg:text-7xl leading-tight font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-6">
            Let's Build
          </h1>
          <p className="text-[28px] md:text-[32px] font-bold text-[#521D07] dark:text-[#B8B0A6] px-4">
            Something Scalable Together
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <div className="sticker-card bg-white dark:bg-[#252220] p-8 border-4 border-[#A47A2D] dark:border-[#A47A2D]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#A47A2D] dark:bg-[#A47A2D] rounded-[16px] flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white dark:text-[#1A1715]" />
                </div>
                <div>
                  <p className="text-[24px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-2">
                    Email
                  </p>
                  <p className="font-mono text-[18px] font-bold text-[#521D07] dark:text-[#B8B0A6] break-all">
                    josh.dizon.aguiluz25@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="sticker-card bg-white dark:bg-[#252220] p-8 border-4 border-[#A47A2D] dark:border-[#A47A2D]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#A47A2D] dark:bg-[#A47A2D] rounded-[16px] flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white dark:text-[#1A1715]" />
                </div>
                <div>
                  <p className="text-[24px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-2">
                    Location
                  </p>
                  <p className="text-[18px] font-bold text-[#521D07] dark:text-[#B8B0A6]">
                    Magalang, Pampanga
                    <br />
                    Philippines
                  </p>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="sticker-card bg-white dark:bg-[#252220] p-8 border-4 border-[#A47A2D] dark:border-[#A47A2D]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#A47A2D] dark:bg-[#A47A2D] rounded-[16px] flex items-center justify-center">
                  <div className="w-6 h-6 bg-[#FFA51F] rounded-full animate-pulse"></div>
                </div>
                <div>
                  <p className="text-[24px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-2">
                    Status
                  </p>
                  <p className="text-[18px] font-bold text-[#FFA51F] dark:text-[#FFA51F]">
                    Seeking Internship Opportunities
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="sticker-card bg-[#F5EBD9] dark:bg-[#252220] p-10 border-4 border-[#A47A2D] dark:border-[#A47A2D]">
              <h4 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-[32px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-6">
                Available For
              </h4>
              <ul className="space-y-4">
                {['Backend Development', 'Full-Stack Projects', 'Mobile App Development', 'Freelance Work'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#A47A2D] dark:text-[#A47A2D] flex-shrink-0" />
                    <span className="text-[20px] font-bold text-[#521D07] dark:text-[#E2E8F0]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Contact Form - Minimalist & Airy */}
          <div className="space-y-8">
            <h3 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-[48px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-8">
              Send Message
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 sticker-card bg-white dark:bg-[#252220]">
                <CheckCircle2 className="w-24 h-24 text-[#A47A2D] dark:text-[#A47A2D] mb-6" />
                <p style={{ fontFamily: 'Michroma, sans-serif' }} className="text-[32px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase text-center">
                  Message Sent!
                </p>
                <p className="text-[20px] font-bold text-[#521D07] dark:text-[#B8B0A6] text-center mt-4">
                  I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label style={{ fontFamily: 'Michroma, sans-serif' }} className="block text-[20px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-3 tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 text-[20px] font-bold bg-white dark:bg-[#252220] text-[#521D07] dark:text-[#E2E8F0] border-2 border-[#A47A2D] dark:border-[#A47A2D] rounded-[20px] focus:outline-none focus:border-[#FFA51F] dark:focus:border-[#FFA51F] transition-colors placeholder:text-[#521D07]/40"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label style={{ fontFamily: 'Michroma, sans-serif' }} className="block text-[20px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-3 tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 text-[20px] font-bold bg-white dark:bg-[#252220] text-[#521D07] dark:text-[#E2E8F0] border-2 border-[#A47A2D] dark:border-[#A47A2D] rounded-[20px] focus:outline-none focus:border-[#FFA51F] dark:focus:border-[#FFA51F] transition-colors placeholder:text-[#521D07]/40"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label style={{ fontFamily: 'Michroma, sans-serif' }} className="block text-[20px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-3 tracking-wide">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 text-[20px] font-bold bg-white dark:bg-[#252220] text-[#521D07] dark:text-[#E2E8F0] border-2 border-[#A47A2D] dark:border-[#A47A2D] rounded-[20px] focus:outline-none focus:border-[#FFA51F] dark:focus:border-[#FFA51F] transition-colors placeholder:text-[#521D07]/40"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label style={{ fontFamily: 'Michroma, sans-serif' }} className="block text-[20px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-3 tracking-wide">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 text-[20px] font-bold bg-white dark:bg-[#252220] text-[#521D07] dark:text-[#E2E8F0] border-2 border-[#A47A2D] dark:border-[#A47A2D] rounded-[20px] focus:outline-none focus:border-[#FFA51F] dark:focus:border-[#FFA51F] resize-none transition-colors placeholder:text-[#521D07]/40"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full pill-button px-12 py-6 bg-[#A47A2D] dark:bg-[#A47A2D] text-white dark:text-[#1A1715] text-[24px] flex items-center justify-center gap-3 hover:bg-[#FFA51F] dark:hover:bg-[#FFA51F] transition-colors font-black"
                >
                  <Send className="w-6 h-6" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <p className="text-[20px] font-bold text-[#521D07] dark:text-[#B8B0A6]">
            © 2024 Josh Andrei Aguiluz. Built with passion and precision.
          </p>
        </div>
      </div>
    </section>
  );
}