import React, { useState } from 'react';

export default function ElegantContact() {
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
    <section id="contact" className="py-32 bg-[#F9F6F0] relative overflow-hidden">
      {/* Code watermarks */}
      <div className="code-watermark top-10 left-20" style={{ fontSize: '100px' }}>{ }</div>
      <div className="code-watermark bottom-10 right-20" style={{ fontSize: '80px' }}>→</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: Info */}
          <div>
            <p className="font-mono text-[24px] text-[#999999] mb-4">// Get in Touch</p>
            <h2 className="text-[56px] md:text-[72px] text-[#333333] mb-8">
              Initialize<br />Handshake
            </h2>
            <p className="text-[24px] text-[#666666] leading-relaxed mb-12 max-w-xl">
              Whether you have a project in mind or just want to connect, I'm always open to discussing new opportunities and collaborations.
            </p>

            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <p className="font-mono text-[20px] text-[#999999] mb-2">// Email</p>
                <a
                  href="mailto:hello@example.com"
                  className="text-[28px] text-[#333333] hover:text-[#666666] transition-colors"
                >
                  hello@example.com
                </a>
              </div>

              <div>
                <p className="font-mono text-[20px] text-[#999999] mb-2">// Social</p>
                <div className="flex gap-6">
                  <a
                    href="#"
                    className="text-[24px] font-mono text-[#333333] hover:text-[#666666] transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="text-[24px] font-mono text-[#333333] hover:text-[#666666] transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="text-[24px] font-mono text-[#333333] hover:text-[#666666] transition-colors"
                  >
                    Twitter
                  </a>
                </div>
              </div>

              <div>
                <p className="font-mono text-[20px] text-[#999999] mb-2">// Location</p>
                <p className="text-[28px] text-[#333333]">
                  New York, USA
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white border-2 border-[#E8E4D9] p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block font-mono text-[20px] text-[#333333] mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-[#F9F6F0] border-2 border-[#E8E4D9] text-[24px] text-[#333333] focus:border-[#333333] outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-mono text-[20px] text-[#333333] mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-[#F9F6F0] border-2 border-[#E8E4D9] text-[24px] text-[#333333] focus:border-[#333333] outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block font-mono text-[20px] text-[#333333] mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-[#F9F6F0] border-2 border-[#E8E4D9] text-[24px] text-[#333333] focus:border-[#333333] outline-none transition-colors"
                  placeholder="Project inquiry"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-mono text-[20px] text-[#333333] mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-[#F9F6F0] border-2 border-[#E8E4D9] text-[24px] text-[#333333] focus:border-[#333333] outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-10 py-5 bg-[#333333] text-[#F9F6F0] text-[24px] font-mono hover:bg-[#555555] transition-all duration-300 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-32 pt-12 border-t border-[#E8E4D9]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-[20px] text-[#999999]">
            © 2024 [Your Name]. All rights reserved.
          </p>
          <p className="font-mono text-[20px] text-[#999999]">
            Designed & Developed with care
          </p>
        </div>
      </div>
    </section>
  );
}
