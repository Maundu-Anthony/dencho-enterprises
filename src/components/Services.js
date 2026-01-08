import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'IT Support Services',
      description: 'Comprehensive IT support to keep your business running smoothly',
      icon: '💻',
      color: 'from-purple-500 to-dencho-purple'
    },
    {
      title: 'Computer Hardware Installations & Maintenance',
      description: 'Professional installation and maintenance of computer systems',
      icon: '🖥️',
      color: 'from-dencho-cyan to-blue-400'
    },
    {
      title: 'CCTV Installations & Maintenance',
      description: 'Advanced security camera systems for your premises',
      icon: '📹',
      color: 'from-dencho-purple to-pink-500'
    },
    {
      title: 'Biometric Access Control',
      description: 'Secure access control systems with biometric technology',
      icon: '🔐',
      color: 'from-cyan-400 to-dencho-cyan'
    },
    {
      title: 'Structured Cabling & Networking',
      description: 'Professional network infrastructure and cabling solutions',
      icon: '🌐',
      color: 'from-dencho-purple to-indigo-500'
    },
    {
      title: 'ERP Software Installations & Support',
      description: 'Enterprise resource planning solutions for your business',
      icon: '📊',
      color: 'from-dencho-cyan to-teal-400'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-dencho-light/20 to-white"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-dencho-cyan/10 text-dencho-cyan rounded-full text-sm font-semibold mb-4">What We Offer</span>
          <h2 className="text-4xl md:text-6xl font-bold text-dencho-dark mb-4">
            Our <span className="bg-gradient-to-r from-dencho-purple to-dencho-cyan bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive ICT solutions tailored to your business needs</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Icon container with gradient */}
              <div className={`relative w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 group-hover:animate-processor transition-transform duration-300`}>
                <div className="group-hover:animate-glitch">
                  {service.icon}
                </div>
                {/* Scan line effect */}
                <div className="absolute inset-0 overflow-hidden rounded-xl opacity-0 group-hover:opacity-100">
                  <div className="absolute w-full h-0.5 bg-white/50 animate-scan-line" style={{animation: 'scan-line 2s linear infinite'}}></div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-dencho-dark group-hover:text-dencho-purple transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-dencho-cyan/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
