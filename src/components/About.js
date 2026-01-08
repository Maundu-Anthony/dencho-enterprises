import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dencho-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-dencho-purple/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-dencho-cyan/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-dencho-purple/10 text-dencho-purple rounded-full text-sm font-semibold mb-4">About Us</span>
          <h2 className="text-4xl md:text-6xl font-bold text-dencho-dark">
            Who We <span className="bg-gradient-to-r from-dencho-purple to-dencho-cyan bg-clip-text text-transparent">Are</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-dencho-purple/10 relative overflow-hidden">
            {/* Robot assistant in corner */}
            <div className="absolute -bottom-4 -right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity animate-float-robot">
              🤖
            </div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-dencho-purple to-dencho-cyan rounded-lg flex items-center justify-center text-2xl mr-4 animate-processor">🏢</div>
              <h3 className="text-2xl font-bold text-dencho-purple">Our Story</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dencho Enterprise is a Kenyan privately owned executive enterprise ICT solutions provider 
              based in Nairobi, Kenya. Established in 2020 by indigenous Kenyan professionals in Information 
              and Communication Technologies.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We enhance the effectiveness of ICT resources for your business growth by taking up world's 
              leading ICT products and developed strategic partner relationships with principal equipment 
              vendors that enable us to deliver optimal ICT products at affordable prices.
            </p>
            <div className="mt-6 pt-6 border-t border-dencho-purple/10">
              <div className="flex items-center text-dencho-purple font-semibold">
                <span className="text-3xl font-bold mr-2">6+</span>
                <span className="text-sm">Years of<br/>Excellence</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="group relative bg-gradient-to-br from-dencho-purple via-dencho-purple to-dencho-cyan p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Vision</h3>
                <p className="leading-relaxed text-white/95">
                  Our vision is to be the leading essential ICT services and products provider by leveraging 
                  up-to-date techniques, latest innovations and designs to help drive businesses into the 
                  future and beyond.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-dencho-cyan via-dencho-cyan to-dencho-purple p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4 text-dencho-dark">Mission</h3>
                <p className="leading-relaxed text-dencho-dark/90">
                  To provide fully managed ICT Services, products and consultation with the know-how needed 
                  all over the world, thus creating healthy relationships with our customers and stakeholders 
                  by offering solutions that deliver quality services and products ensuring utmost satisfaction 
                  to our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
