import React from 'react';
import TransformerRobot from './TransformerRobot';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-dencho-dark via-dencho-purple to-dencho-dark min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Circuit board pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="#45edf2" />
              <line x1="50" y1="50" x2="80" y2="50" stroke="#45edf2" strokeWidth="1" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
              </line>
              <line x1="50" y1="50" x2="50" y2="20" stroke="#45edf2" strokeWidth="1" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1.5s" repeatCount="indefinite"/>
              </line>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>
      
      {/* Advanced Transformer Robot */}
      <div className="absolute top-1/4 right-10 lg:right-20 hidden lg:block z-20">
        <TransformerRobot size="large" position="hero" />
      </div>
      
      {/* Digital particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-dencho-cyan rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animation: 'digital-rain 4s linear infinite'
            }}
          />
        ))}
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-dencho-cyan rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-dencho-purple rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-dencho-light rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white">
          <div className="inline-block mb-6 px-6 py-2 bg-dencho-cyan/10 backdrop-blur-sm border border-dencho-cyan/30 rounded-full">
            <span className="text-dencho-cyan font-semibold">🚀 Innovative ICT Solutions Since 2020</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-dencho-cyan via-dencho-light to-dencho-cyan bg-clip-text text-transparent animate-gradient">Dencho</span>
            <br/>
            <span className="text-white">Enterprise Solutions</span>
          </h1>
          
          <p className="text-xl md:text-3xl mb-8 text-dencho-cyan font-semibold">
            Leading Essential ICT Services Provider
          </p>
          
          <p className="text-base md:text-lg mb-12 max-w-3xl mx-auto text-dencho-light/90 leading-relaxed">
            Empowering businesses through cutting-edge technology solutions, world-class products, 
            and innovative ICT services. Your trusted partner in digital transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              className="group relative bg-gradient-to-r from-dencho-cyan to-dencho-light text-dencho-dark px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-dencho-cyan/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Explore Services</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="group relative bg-transparent border-2 border-dencho-cyan text-dencho-cyan px-8 py-4 rounded-full font-bold hover:bg-dencho-cyan hover:text-dencho-dark hover:shadow-2xl hover:shadow-dencho-cyan/50 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-dencho-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
