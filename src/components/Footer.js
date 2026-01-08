import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-dencho-dark to-black text-white py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-dencho-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-dencho-cyan/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-dencho-cyan to-dencho-light bg-clip-text text-transparent">Dencho</span>
            <span className="text-white"> Enterprise Solutions Ltd.</span>
          </div>
          <p className="text-dencho-light/80 mb-6 max-w-md mx-auto">
            Leading Essential ICT Services and Products Provider in Kenya
          </p>
          
          {/* Social/Quick links placeholder */}
          <div className="flex justify-center space-x-6 mb-8">
            <div className="w-10 h-10 bg-dencho-cyan/10 hover:bg-dencho-cyan/20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
              <span className="text-dencho-cyan">📧</span>
            </div>
            <div className="w-10 h-10 bg-dencho-cyan/10 hover:bg-dencho-cyan/20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
              <span className="text-dencho-cyan">📱</span>
            </div>
            <div className="w-10 h-10 bg-dencho-cyan/10 hover:bg-dencho-cyan/20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
              <span className="text-dencho-cyan">🌐</span>
            </div>
          </div>
          
          <div className="border-t border-dencho-purple/30 pt-6 mt-6">
            <p className="text-dencho-light/60 text-sm">
              &copy; {new Date().getFullYear()} Dencho Enterprise Solutions Ltd. All rights reserved.
            </p>
            <p className="text-dencho-light/40 text-xs mt-2">
              Nyandarua House, Kamae Road, Nairobi, Kenya
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
