import React, { useState } from 'react';

export default function RetroContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    <section id="contact" className="py-32 dot-matrix-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 center-content">
        {/* Section Header */}
        <div className="mb-20 center-content">
          <div className="inline-block px-10 py-3 bg-[#B8C5B8] dark:bg-[#4B5563] rounded-full mb-6">
            <p className="font-sans text-[24px] font-black text-[#4A5568] dark:text-[#E2E8F0] uppercase">
              Get In Touch
            </p>
          </div>
          <h2 className="text-[72px] md:text-[96px] text-[#FFFCF9] dark:text-[#E2E8F0] mb-8">
            LET'S TALK
          </h2>
          <p className="text-[28px] font-black text-[#E8EDEF] dark:text-[#CBD5E1] max-w-3xl">
            Got a project idea? Just wanna say hi? Drop me a message!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {/* Email */}
          <div className="sticker-card bg-[#CDD7DF] dark:bg-[#2D3748] p-8 center-content wiggle-hover">
            <div className="icon-placeholder mb-4 mx-auto"></div>
            <h3 className="text-[28px] text-[#4A5568] dark:text-[#E2E8F0] mb-3 uppercase">Email</h3>
            <a
              href="mailto:josh.dizon.aguiluz25@gmail.com"
              className="text-[18px] font-black text-[#4A5568] dark:text-[#CBD5E1] hover:text-[#7A8A9D] dark:hover:text-[#A8B5C7] transition-colors break-all text-center"
            >
              josh.dizon.aguiluz25@gmail.com
            </a>
          </div>

          {/* Location */}
          <div className="sticker-card bg-[#D4DDD4] dark:bg-[#4B5563] p-8 center-content wiggle-hover">
            <div className="icon-placeholder mb-4 mx-auto"></div>
            <h3 className="text-[28px] text-[#4A5568] dark:text-[#E2E8F0] mb-3 uppercase">Location</h3>
            <p className="text-[20px] font-black text-[#4A5568] dark:text-[#CBD5E1]">
              Magalang, Pampanga
            </p>
          </div>

          {/* Availability */}
          <div className="sticker-card bg-[#E8EDEF] dark:bg-[#475569] p-8 center-content wiggle-hover">
            <div className="icon-placeholder mb-4 mx-auto"></div>
            <h3 className="text-[28px] text-[#4A5568] dark:text-[#E2E8F0] mb-3 uppercase">Status</h3>
            <p className="text-[20px] font-black text-[#4A5568] dark:text-[#CBD5E1]">
              Seeking Internship
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="sticker-card bg-white dark:bg-[#252D3D] p-12 max-w-3xl mx-auto border-8 border-[#B8C5B8] dark:border-[#7A8F7A]">
          <h3 className="text-[48px] text-[#4A5568] dark:text-[#E2E8F0] mb-8 text-center uppercase">
            Send A Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block font-sans text-[24px] font-black text-[#4A5568] dark:text-[#E2E8F0] mb-3 uppercase">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-8 py-5 bg-[#FAF8F5] dark:bg-[#1A1F2E] border-4 border-[#E8EDEF] dark:border-[#475569] rounded-3xl text-[24px] font-black text-[#4A5568] dark:text-[#E2E8F0] focus:border-[#A8B5C7] dark:focus:border-[#7A8A9D] outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block font-sans text-[24px] font-black text-[#4A5568] dark:text-[#E2E8F0] mb-3 uppercase">
                Your Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-8 py-5 bg-[#FAF8F5] dark:bg-[#1A1F2E] border-4 border-[#E8EDEF] dark:border-[#475569] rounded-3xl text-[24px] font-black text-[#4A5568] dark:text-[#E2E8F0] focus:border-[#A8B5C7] dark:focus:border-[#7A8A9D] outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block font-sans text-[24px] font-black text-[#4A5568] dark:text-[#E2E8F0] mb-3 uppercase">
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-8 py-5 bg-[#FAF8F5] dark:bg-[#1A1F2E] border-4 border-[#E8EDEF] dark:border-[#475569] rounded-3xl text-[24px] font-black text-[#4A5568] dark:text-[#E2E8F0] focus:border-[#A8B5C7] dark:focus:border-[#7A8A9D] outline-none transition-colors resize-none"
                placeholder="Tell me about your awesome project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="pill-button w-full px-12 py-6 bg-[#5A6B7A] dark:bg-[#7A8A9D] text-[#FFFCF9] dark:text-[#E2E8F0] text-[32px]"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="mt-16 center-content">
          <p className="text-[24px] font-black text-[#E8EDEF] dark:text-[#CBD5E1] mb-6 uppercase">
            Or Find Me Here:
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#"
              className="pill-button px-10 py-4 bg-[#CDD7DF] dark:bg-[#2D3748] text-[#4A5568] dark:text-[#E2E8F0] text-[24px]"
            >
              GitHub
            </a>
            <a
              href="#"
              className="pill-button px-10 py-4 bg-[#D4DDD4] dark:bg-[#4B5563] text-[#4A5568] dark:text-[#E2E8F0] text-[24px]"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="pill-button px-10 py-4 bg-[#E8EDEF] dark:bg-[#475569] text-[#4A5568] dark:text-[#E2E8F0] text-[24px]"
            >
              Twitter
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t-8 border-[#A8B5C7] dark:border-[#7A8A9D]">
          <div className="center-content">
            <p className="text-[24px] font-black text-[#E8EDEF] dark:text-[#CBD5E1] mb-4">
              Built with passion and precision
            </p>
            <p className="text-[20px] font-black text-[#E8EDEF] dark:text-[#CBD5E1] uppercase">
              © 2024 Josh Andrei Aguiluz. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}