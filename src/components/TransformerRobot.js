import React, { useState } from 'react';

const TransformerRobot = ({ size = 'large', position = 'hero' }) => {
  const [isTransformed, setIsTransformed] = useState(false);
  
  const sizeClasses = {
    small: 'w-24 h-24',
    medium: 'w-40 h-40',
    large: 'w-64 h-64'
  };

  return (
    <div 
      className={`relative ${sizeClasses[size]} cursor-pointer transform-gpu`}
      onClick={() => setIsTransformed(!isTransformed)}
      onMouseEnter={() => setIsTransformed(true)}
      onMouseLeave={() => setIsTransformed(false)}
    >
      {/* Transformer Robot SVG */}
      <svg 
        viewBox="0 0 200 200" 
        className={`w-full h-full transition-all duration-700 ${isTransformed ? 'scale-110' : 'scale-100'}`}
        style={{ filter: 'drop-shadow(0 0 20px rgba(69, 237, 242, 0.5))' }}
      >
        {/* Energy Core - Pulsing */}
        <circle 
          cx="100" 
          cy="100" 
          r="8" 
          fill="#45edf2"
          className="animate-processor"
        >
          <animate attributeName="r" values="8;12;8" dur="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1s" repeatCount="indefinite" />
        </circle>

        {/* Head - Transforms */}
        <g className={`transition-all duration-700 origin-center ${isTransformed ? 'translate-y-[-10px]' : ''}`}>
          {/* Head Main */}
          <rect 
            x="75" 
            y="40" 
            width="50" 
            height="35" 
            fill="url(#robotGradient)"
            rx="5"
            className={`transition-all duration-700 ${isTransformed ? 'scale-110' : ''}`}
            style={{ transformOrigin: '100px 57px' }}
          />
          
          {/* Antenna - Rotating */}
          <line 
            x1="100" 
            y1="35" 
            x2="100" 
            y2="25" 
            stroke="#45edf2" 
            strokeWidth="3"
            strokeLinecap="round"
            className={isTransformed ? 'animate-robot-wave' : ''}
          />
          <circle cx="100" cy="23" r="4" fill="#e8e8fc">
            <animate attributeName="fill" values="#e8e8fc;#45edf2;#e8e8fc" dur="1.5s" repeatCount="indefinite" />
          </circle>

          {/* Eyes - Glowing */}
          <circle cx="85" cy="55" r="5" fill="#45edf2" className="animate-robot-blink">
            <animate attributeName="fill" values="#45edf2;#e8e8fc;#45edf2" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="115" cy="55" r="5" fill="#45edf2" className="animate-robot-blink">
            <animate attributeName="fill" values="#45edf2;#e8e8fc;#45edf2" dur="2s" repeatCount="indefinite" />
          </circle>

          {/* Visor line */}
          <line x1="80" y1="65" x2="120" y2="65" stroke="#49299a" strokeWidth="2" />
        </g>

        {/* Body - Main structure */}
        <g className={`transition-all duration-500 ${isTransformed ? 'scale-105' : ''}`} style={{ transformOrigin: '100px 100px' }}>
          <rect 
            x="70" 
            y="80" 
            width="60" 
            height="50" 
            fill="url(#robotGradient)"
            rx="8"
          />
          
          {/* Chest plate details */}
          <rect x="85" y="90" width="30" height="30" fill="rgba(69, 237, 242, 0.2)" rx="3" />
          <line x1="100" y1="90" x2="100" y2="120" stroke="#45edf2" strokeWidth="1" />
          <line x1="85" y1="105" x2="115" y2="105" stroke="#45edf2" strokeWidth="1" />

          {/* Shoulder joints - Rotating gears */}
          <circle 
            cx="65" 
            cy="90" 
            r="8" 
            fill="#49299a" 
            stroke="#45edf2" 
            strokeWidth="2"
            className={isTransformed ? 'animate-spin' : ''}
          />
          <circle 
            cx="135" 
            cy="90" 
            r="8" 
            fill="#49299a" 
            stroke="#45edf2" 
            strokeWidth="2"
            className={isTransformed ? 'animate-spin' : ''}
          />
        </g>

        {/* Left Arm - Transforming */}
        <g className={`transition-all duration-700 origin-top-left ${isTransformed ? 'rotate-[-25deg]' : 'rotate-0'}`} style={{ transformOrigin: '65px 90px' }}>
          <rect x="40" y="90" width="25" height="50" fill="url(#armGradient)" rx="5" />
          <rect x="40" y="145" width="25" height="30" fill="url(#robotGradient)" rx="5" />
          {/* Weapon mode indicator */}
          {isTransformed && (
            <>
              <rect x="38" y="170" width="29" height="8" fill="#45edf2" opacity="0.8" />
              <circle cx="52.5" cy="174" r="3" fill="#e8e8fc">
                <animate attributeName="r" values="3;5;3" dur="0.5s" repeatCount="indefinite" />
              </circle>
            </>
          )}
        </g>

        {/* Right Arm - Transforming */}
        <g className={`transition-all duration-700 origin-top-right ${isTransformed ? 'rotate-[25deg]' : 'rotate-0'}`} style={{ transformOrigin: '135px 90px' }}>
          <rect x="135" y="90" width="25" height="50" fill="url(#armGradient)" rx="5" />
          <rect x="135" y="145" width="25" height="30" fill="url(#robotGradient)" rx="5" />
          {/* Weapon mode indicator */}
          {isTransformed && (
            <>
              <rect x="133" y="170" width="29" height="8" fill="#45edf2" opacity="0.8" />
              <circle cx="147.5" cy="174" r="3" fill="#e8e8fc">
                <animate attributeName="r" values="3;5;3" dur="0.5s" repeatCount="indefinite" />
              </circle>
            </>
          )}
        </g>

        {/* Legs */}
        <g className={`transition-all duration-500 ${isTransformed ? 'translate-y-2' : ''}`}>
          {/* Left Leg */}
          <rect x="75" y="135" width="20" height="40" fill="url(#robotGradient)" rx="5" />
          <rect x="75" y="175" width="20" height="20" fill="url(#armGradient)" rx="3" />
          
          {/* Right Leg */}
          <rect x="105" y="135" width="20" height="40" fill="url(#robotGradient)" rx="5" />
          <rect x="105" y="175" width="20" height="20" fill="url(#armGradient)" rx="3" />

          {/* Knee joints */}
          <circle cx="85" cy="155" r="5" fill="#45edf2" opacity="0.6" />
          <circle cx="115" cy="155" r="5" fill="#45edf2" opacity="0.6" />
        </g>

        {/* Energy aura when transformed */}
        {isTransformed && (
          <>
            <circle cx="100" cy="100" r="90" fill="none" stroke="#45edf2" strokeWidth="2" opacity="0.3">
              <animate attributeName="r" values="90;100;90" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="100" cy="100" r="95" fill="none" stroke="#49299a" strokeWidth="2" opacity="0.2">
              <animate attributeName="r" values="95;105;95" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0;0.2" dur="2.5s" repeatCount="indefinite" />
            </circle>
          </>
        )}

        {/* Gradients */}
        <defs>
          <linearGradient id="robotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#49299a" />
            <stop offset="100%" stopColor="#0e1625" />
          </linearGradient>
          <linearGradient id="armGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#45edf2" />
            <stop offset="100%" stopColor="#49299a" />
          </linearGradient>
        </defs>
      </svg>

      {/* Transformation indicator */}
      {isTransformed && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <div className="bg-dencho-cyan text-dencho-dark px-4 py-1 rounded-full text-xs font-bold animate-pulse">
            BATTLE MODE
          </div>
        </div>
      )}

      {/* Particle effects when transformed */}
      {isTransformed && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-dencho-cyan rounded-full"
              style={{
                left: '50%',
                top: '50%',
                animation: `particle-burst 0.8s ease-out ${i * 0.1}s`,
                transform: `rotate(${i * 45}deg) translateY(-40px)`,
                opacity: 0
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TransformerRobot;
