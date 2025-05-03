'use client';

import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8 md:py-16 flex flex-col items-center min-h-screen">
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16 px-2">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-cyan-300 via-cyan-500 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
          CyanPrint Documentation
        </h1>
        <p className="text-base md:text-lg text-fd-muted-foreground">
          Your comprehensive guide to using and contributing to CyanPrint
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full max-w-5xl">
        <DocCard
          title="For Users"
          href="/docs/user"
          description="Learn how to use CyanPrint to increase your productivity"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 md:w-12 md:h-12"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
          }
          gradient="from-blue-500/30 to-cyan-400/30"
          spotlightColors={['rgba(59, 130, 246, 0.2)', 'rgba(34, 211, 238, 0.2)']}
        />
        <DocCard
          title="For Developers"
          href="/docs/developer"
          description="Develop your own CyanPrint Templates, Processors or Plugins"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 md:w-12 md:h-12"
            >
              <path
                fillRule="evenodd"
                d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                clipRule="evenodd"
              />
            </svg>
          }
          gradient="from-emerald-500/30 to-teal-400/30"
          spotlightColors={['rgba(16, 185, 129, 0.2)', 'rgba(45, 212, 191, 0.2)']}
        />
        <DocCard
          title="For Contributors"
          href="/docs/contributor"
          description="Contribute to the CyanPrint platform"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 md:w-12 md:h-12"
            >
              <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
            </svg>
          }
          gradient="from-purple-500/30 to-pink-400/30"
          spotlightColors={['rgba(168, 85, 247, 0.2)', 'rgba(244, 114, 182, 0.2)']}
        />
      </div>
    </main>
  );
}

function DocCard({
  title,
  href,
  description,
  icon,
  gradient,
  spotlightColors,
}: {
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  spotlightColors: string[];
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Check if it's a touch device - only on client-side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsTouchDevice('ontouchstart' in window || (navigator && navigator.maxTouchPoints > 0));
    }
  }, []);

  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isTouchDevice) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  // Calculate position as percentage for gradient shifting
  const xPercent = cardRef.current ? (mousePosition.x / cardRef.current.offsetWidth) * 100 : 50;
  const yPercent = cardRef.current ? (mousePosition.y / cardRef.current.offsetHeight) * 100 : 50;

  return (
    <Link href={href} className="group">
      <div
        ref={cardRef}
        className={`relative flex flex-col h-full p-4 md:p-6 dark:bg-gray-800/30 bg-white/90 backdrop-blur-sm border border-fd-border dark:border-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${isHovering ? 'dark:bg-gray-800/40 bg-white/95' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onTouchStart={() => setIsHovering(true)}
        style={
          {
            background:
              isHovering && !isTouchDevice
                ? `radial-gradient(circle at ${xPercent}% ${yPercent}%, ${spotlightColors[0].replace('0.2', '0.05')}, transparent 90%), radial-gradient(circle at ${100 - xPercent}% ${100 - yPercent}%, ${spotlightColors[1].replace('0.2', '0.05')}, transparent 90%), var(--bg-color, #ffffff1a)`
                : isHovering && isTouchDevice
                  ? `radial-gradient(circle at 50% 50%, ${spotlightColors[0].replace('0.2', '0.05')}, transparent 90%), radial-gradient(circle at 50% 50%, ${spotlightColors[1].replace('0.2', '0.05')}, transparent 90%), var(--bg-color, #ffffff1a)`
                  : '',
            '--bg-color': 'rgba(255, 255, 255, 0.05)',
          } as React.CSSProperties
        }
      >
        {/* Background elements with lower z-index */}
        <div className="absolute inset-0 -z-10">
          {/* Subtle gradient border/glow effect */}
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r ${gradient} blur-3xl transition-opacity duration-500`}
          ></div>

          {/* Mouse-following spotlight effect - only on non-touch devices */}
          {!isTouchDevice && (
            <div
              className={`absolute pointer-events-none mix-blend-soft-light rounded-full w-96 h-96 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 blur-3xl ${isHovering ? 'opacity-30' : ''}`}
              style={{
                left: `${mousePosition.x}px`,
                top: `${mousePosition.y}px`,
                background: `radial-gradient(circle, ${spotlightColors[0].replace('0.2', '0.08')} 0%, rgba(255,255,255,0) 90%)`,
              }}
            ></div>
          )}

          {/* Static spotlight effect for touch devices */}
          {isTouchDevice && (
            <div
              className={`absolute pointer-events-none mix-blend-soft-light rounded-full w-full h-full opacity-0 transition-opacity duration-300 blur-3xl ${isHovering ? 'opacity-30' : ''}`}
              style={{
                background: `radial-gradient(circle at center, ${spotlightColors[0].replace('0.2', '0.08')} 0%, rgba(255,255,255,0) 90%)`,
              }}
            ></div>
          )}
        </div>

        {/* Card content with higher visual prominence */}
        <div
          className={`relative z-10 flex justify-center mb-4 md:mb-6 transition-all duration-300 drop-shadow-sm`}
          style={{
            color: `${spotlightColors[0].replace('0.2', '0.9')}`,
          }}
        >
          {icon}
        </div>
        <h2
          className="relative z-10 text-xl md:text-2xl font-bold mb-2 md:mb-3 dark:text-white transition-all duration-300 drop-shadow-sm text-center"
          style={{
            background: isHovering
              ? `linear-gradient(135deg, ${spotlightColors[0].replace('0.2', '0.9')}, ${spotlightColors[1].replace('0.2', '0.9')})`
              : '',
            backgroundClip: isHovering ? 'text' : '',
            WebkitBackgroundClip: isHovering ? 'text' : '',
            color: isHovering ? 'transparent' : '',
            textShadow: isHovering ? '0 1px 2px rgba(0,0,0,0.1)' : 'none',
          }}
        >
          {title}
        </h2>
        <p className="relative z-10 text-fd-muted-foreground dark:text-gray-300 text-sm text-center flex-grow font-medium">
          {description}
        </p>
        <div className="w-full flex justify-center mt-4">
          <div
            className="relative z-10 font-semibold flex items-center justify-center px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              background: `linear-gradient(to right, ${spotlightColors[0].replace('0.2', '0.9')}, ${spotlightColors[1].replace('0.2', '0.9')})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 1px 2px rgba(0,0,0,0.1)',
            }}
          >
            <div>Explore</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
