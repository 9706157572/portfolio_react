import React, { useState, useEffect } from 'react';

const GraphicsFooter: React.FC = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Generate floating elements with specific positions
  const floatingElements = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 12 + 6,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    duration: Math.random() * 8 + 6,
  }));

  return (
    <footer className="relative h-72 bg-gradient-to-br from-green-50 via-yellow-50 to-orange-100 overflow-hidden">
      
      {/* Animated Wave Layers */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 180" className="w-full h-36">
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#84cc16" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#eab308" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#65a30d" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ca8a04" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#854d0e" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          <path
            d="M0,100 C300,60 600,140 1200,80 L1200,180 L0,180 Z"
            fill="url(#wave1)"
            style={{
              animation: 'wave 8s ease-in-out infinite',
              animationDelay: '0s'
            }}
          />
          <path
            d="M0,120 C400,80 800,160 1200,100 L1200,180 L0,180 Z"
            fill="url(#wave2)"
            style={{
              animation: 'wave 6s ease-in-out infinite reverse',
              animationDelay: '1s'
            }}
          />
          <path
            d="M0,140 C200,120 900,100 1200,120 L1200,180 L0,180 Z"
            fill="url(#wave3)"
            style={{
              animation: 'wave 10s ease-in-out infinite',
              animationDelay: '2s'
            }}
          />
        </svg>
      </div>

      {/* Floating Organic Shapes */}
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className="absolute animate-bounce"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`,
          }}
        >
          <div
            className={`rounded-full animate-pulse ${
              element.id % 4 === 0 ? 'bg-lime-500/60' :
              element.id % 4 === 1 ? 'bg-yellow-400/60' :
              element.id % 4 === 2 ? 'bg-orange-400/60' : 'bg-yellow-600/60'
            }`}
            style={{
              width: `${element.size}px`,
              height: `${element.size}px`,
            }}
          />
        </div>
      ))}

      {/* Geometric Pattern Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 grid-rows-6 h-full w-full gap-4 p-8">
          {Array.from({ length: 72 }, (_, i) => (
            <div
              key={i}
              className={`rounded-sm transform rotate-45 animate-pulse ${
                i % 5 === 0 ? 'bg-lime-400' :
                i % 5 === 1 ? 'bg-yellow-300' :
                i % 5 === 2 ? 'bg-orange-300' :
                i % 5 === 3 ? 'bg-yellow-600' : 'bg-green-400'
              }`}
              style={{
                animationDelay: `${(i * 0.1)}s`,
                animationDuration: `${2 + (i % 3)}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Large Rotating Geometric Elements */}
      <div className="absolute top-12 left-16">
        <div 
          className="w-20 h-20 border-4 border-lime-500/80 transform animate-spin"
          style={{ 
            animationDuration: '15s',
            borderRadius: '30%',
          }} 
        />
      </div>
      
      <div className="absolute top-8 right-20">
        <div 
          className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 transform animate-pulse opacity-70"
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            animationDuration: '4s'
          }}
        />
      </div>

      <div className="absolute bottom-24 left-1/4">
        <div 
          className="w-12 h-12 bg-gradient-to-r from-lime-500 to-yellow-500 rounded-full animate-ping"
          style={{ animationDuration: '3s' }} 
        />
      </div>

      <div className="absolute top-20 left-1/2">
        <div 
          className="w-14 h-14 border-3 border-orange-400 transform rotate-45 animate-bounce opacity-60"
          style={{ animationDuration: '5s' }}
        />
      </div>

      <div className="absolute bottom-20 right-1/4">
        <div 
          className="w-18 h-18 bg-yellow-600/70 transform animate-spin"
          style={{
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            animationDuration: '12s'
          }}
        />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${80 + i * 15}px`,
              height: `${80 + i * 15}px`,
              background: i % 3 === 0 
                ? 'radial-gradient(circle, rgba(132, 204, 22, 0.2) 0%, transparent 70%)'
                : i % 3 === 1
                ? 'radial-gradient(circle, rgba(234, 179, 8, 0.2) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(249, 115, 22, 0.2) 0%, transparent 70%)',
              left: `${15 + i * 15}%`,
              top: `${10 + i * 12}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Morphing Blob Shapes */}
      <div className="absolute top-16 right-16">
        <div 
          className="w-24 h-24 bg-gradient-to-br from-lime-400/50 to-yellow-400/50 animate-pulse"
          style={{
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            animationDuration: '6s',
            transform: `rotate(${time * 2}deg)`
          }}
        />
      </div>

      <div className="absolute bottom-32 left-12">
        <div 
          className="w-20 h-20 bg-gradient-to-tr from-orange-400/60 to-yellow-600/60 animate-bounce"
          style={{
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            animationDuration: '4s',
            transform: `rotate(${time * -1.5}deg)`
          }}
        />
      </div>

      {/* Flowing Lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
        <defs>
          <linearGradient id="line1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#84cc80" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#eab308" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="line2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ca8a04" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path
          d="M50,100 Q200,50 350,150 T700,100"
          stroke="url(#line1)"
          strokeWidth="3"
          fill="none"
          className="animate-pulse"
          style={{ animationDuration: '4s' }}
        />
        <path
          d="M0,200 Q150,120 300,180 T600,160"
          stroke="url(#line2)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
          style={{ animationDuration: '5s', animationDelay: '1s' }}
        />
      </svg>

      {/* Custom CSS animations */}
      <style>{`
        @keyframes wave {
          0%, 100% {
            d: path("M0,100 C300,60 600,140 1200,80 L1200,180 L0,180 Z");
          }
          50% {
            d: path("M0,80 C300,120 600,60 1200,100 L1200,180 L0,180 Z");
          }
        }
      `}</style>
    </footer>
  );
};

export default GraphicsFooter;