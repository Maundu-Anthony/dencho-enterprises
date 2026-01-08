import React from 'react';

const Products = () => {
  const products = [
    {
      title: 'Computer Hardware & Accessories',
      description: 'Quality computers, laptops, and peripherals from leading brands',
      icon: '💻',
      gradient: 'from-blue-500 to-dencho-cyan'
    },
    {
      title: 'ERP Software',
      description: 'Comprehensive enterprise resource planning solutions',
      icon: '📱',
      gradient: 'from-dencho-purple to-purple-600'
    },
    {
      title: 'CCTV Systems',
      description: 'Advanced surveillance systems for enhanced security',
      icon: '📹',
      gradient: 'from-dencho-cyan to-cyan-500'
    },
    {
      title: 'Biometric Access Control Systems',
      description: 'Cutting-edge biometric security solutions',
      icon: '👤',
      gradient: 'from-purple-500 to-dencho-purple'
    },
    {
      title: 'UPS Systems',
      description: 'Uninterruptible power supply solutions for business continuity',
      icon: '🔋',
      gradient: 'from-dencho-cyan to-teal-400'
    },
    {
      title: 'Printers',
      description: 'Professional printing solutions for all business needs',
      icon: '🖨️',
      gradient: 'from-indigo-500 to-dencho-purple'
    },
    {
      title: 'Networking Accessories',
      description: 'Routers, switches, and cabling materials',
      icon: '🔌',
      gradient: 'from-cyan-400 to-dencho-cyan'
    }
  ];

  return (
    <section id="products" className="py-20 bg-dencho-light relative overflow-hidden">
      {/* Robot delivery animation */}
      <div className="absolute top-10 left-0 text-4xl animate-float-robot" style={{animation: 'float-robot 4s ease-in-out infinite, slide-across 20s linear infinite'}}>
        🤖📦
      </div>
      
      {/* Tech particle effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-dencho-cyan/20 text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-robot ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {['⚙️', '🔧', '💾', '🔌', '⚡'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>
      
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-dencho-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-dencho-cyan/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-white text-dencho-purple rounded-full text-sm font-semibold mb-4 shadow-md">Our Products</span>
          <h2 className="text-4xl md:text-6xl font-bold text-dencho-dark mb-4">
            Premium <span className="bg-gradient-to-r from-dencho-purple to-dencho-cyan bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">World-class ICT products from trusted brands</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group relative bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 overflow-hidden"
            >
              {/* Gradient line on hover */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              
              {/* Icon with gradient background */}
              <div className={`inline-block p-4 bg-gradient-to-br ${product.gradient} rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-3xl">{product.icon}</div>
              </div>
              
              <h3 className="text-lg font-bold mb-2 text-dencho-dark group-hover:text-dencho-purple transition-colors">{product.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
              
              {/* Hover shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-dencho-purple to-dencho-cyan text-white rounded-full font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <span>Request a Quote</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
