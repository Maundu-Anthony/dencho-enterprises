import React from 'react';
import TransformerRobot from './TransformerRobot';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-dencho-purple via-dencho-dark to-dencho-purple text-white relative overflow-hidden">
      {/* Advanced Transformer Support Robot */}
      <div className="absolute bottom-10 left-10 hidden lg:block z-20">
        <div className="relative">
          <TransformerRobot size="medium" position="contact" />
          {/* Speech bubble */}
          <div className="absolute -top-20 left-28 bg-white text-dencho-dark px-6 py-3 rounded-2xl rounded-bl-none text-sm font-bold shadow-2xl animate-pulse whitespace-nowrap border-2 border-dencho-cyan">
            <span className="flex items-center gap-2">
              <span className="text-2xl animate-robot-wave">👋</span>
              <span>How can I assist you?</span>
            </span>
            <div className="absolute -bottom-1 left-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
          </div>
        </div>
      </div>
      
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-96 h-96 bg-dencho-cyan rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-dencho-light rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-dencho-cyan/20 backdrop-blur-sm text-dencho-cyan rounded-full text-sm font-semibold mb-4">Get In Touch</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Let's <span className="bg-gradient-to-r from-dencho-cyan to-dencho-light bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-dencho-light/80 max-w-2xl mx-auto">Have a project in mind? We'd love to hear from you.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-dencho-cyan mb-6 flex items-center">
                <span className="w-8 h-8 bg-dencho-cyan/20 rounded-lg flex items-center justify-center mr-3">📞</span>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-dencho-cyan to-dencho-light rounded-lg flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    📍
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-dencho-cyan">Address</h4>
                    <p className="text-dencho-light/90">Nyandarua House, Kamae Road</p>
                    <p className="text-dencho-light/90">Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-dencho-purple to-pink-500 rounded-lg flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    📞
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-dencho-cyan">Phone</h4>
                    <a 
                      href="tel:+254725540972" 
                      className="block text-dencho-light/90 hover:text-dencho-cyan transition-colors hover:underline"
                    >
                      +254 (0)725 540 972
                    </a>
                    <a 
                      href="tel:+254722686602" 
                      className="block text-dencho-light/90 hover:text-dencho-cyan transition-colors hover:underline"
                    >
                      +254 (0)722 686 602
                    </a>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-dencho-cyan rounded-lg flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-dencho-cyan">Email</h4>
                    <a 
                      href="mailto:denchoenterprise@gmail.com"
                      className="block text-dencho-light/90 hover:text-dencho-cyan transition-colors hover:underline"
                    >
                      denchoenterprise@gmail.com
                    </a>
                  </div>
                </div>

                <a 
                  href="https://wa.me/254725540972" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all cursor-pointer border-2 border-green-500/30 hover:border-green-500/60"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    💬
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-dencho-cyan flex items-center gap-2">
                      WhatsApp
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">Live Chat</span>
                    </h4>
                    <p className="text-dencho-light/90 group-hover:text-green-400 transition-colors">
                      +254 725 540 972
                    </p>
                    <p className="text-xs text-dencho-light/60 mt-1">Click to chat with us instantly</p>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Business hours */}
            <div className="bg-gradient-to-br from-dencho-cyan/10 to-dencho-purple/10 backdrop-blur-md p-6 rounded-2xl border border-dencho-cyan/20">
              <h4 className="font-bold text-dencho-cyan mb-4 flex items-center">
                <span className="mr-2">🕒</span> Business Hours
              </h4>
              <div className="space-y-2 text-dencho-light/90">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold text-white">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold text-white">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold text-dencho-cyan">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-br from-dencho-cyan to-dencho-light rounded-lg flex items-center justify-center text-xl mr-3">💬</span>
              Send us a Message
            </h3>
            <form className="space-y-5">
              <div>
                <label className="block text-dencho-light/90 text-sm font-semibold mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-dencho-cyan/30 text-white placeholder-dencho-light/50 focus:outline-none focus:border-dencho-cyan focus:bg-white/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-dencho-light/90 text-sm font-semibold mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-dencho-cyan/30 text-white placeholder-dencho-light/50 focus:outline-none focus:border-dencho-cyan focus:bg-white/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-dencho-light/90 text-sm font-semibold mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+254 700 000 000" 
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-dencho-cyan/30 text-white placeholder-dencho-light/50 focus:outline-none focus:border-dencho-cyan focus:bg-white/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-dencho-light/90 text-sm font-semibold mb-2">Message</label>
                <textarea 
                  placeholder="Tell us about your project..." 
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-dencho-cyan/30 text-white placeholder-dencho-light/50 focus:outline-none focus:border-dencho-cyan focus:bg-white/20 transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-dencho-cyan to-dencho-light text-dencho-dark px-6 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-dencho-cyan/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                <span>Send Message</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
