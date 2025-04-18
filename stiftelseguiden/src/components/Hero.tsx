"use client";

import Link from 'next/link';
import { ReactNode } from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  primaryCta?: {
    text: string;
    href: string;
    external?: boolean;
  };
  secondaryCta?: {
    text: string;
    href: string;
    external?: boolean;
  };
  pattern?: 'dots' | 'waves' | 'none';
  align?: 'left' | 'center';
  children?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  imageComponent?: ReactNode;
}

export default function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  pattern = 'none',
  align = 'left',
  children,
  size = 'medium',
  imageComponent,
}: HeroProps) {
  // Pattern background styles
  const getPatternStyle = () => {
    switch (pattern) {
      case 'dots':
        return "bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:16px_16px]";
      case 'waves':
        return "bg-[url('/patterns/wave.svg')]";
      default:
        return "";
    }
  };
  
  // Size classes
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'py-8 md:py-12';
      case 'large':
        return 'py-16 md:py-24';
      default:
        return 'py-12 md:py-16';
    }
  };

  return (
    <section
      className={`
        relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-700 text-white
        ${getSizeClasses()}
        ${getPatternStyle()}
      `}
    >
      {/* Simplified background with fewer decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full" aria-hidden="true">
        {/* Simple gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary-800/20"></div>
        
        {/* Simple dot pattern overlay */}
        {pattern === 'dots' && (
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          ></div>
        )}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={`flex flex-col ${imageComponent ? 'md:flex-row' : ''} gap-8 items-center`}>
          <div className={`w-full ${imageComponent ? 'md:w-1/2' : ''} ${align === 'center' ? 'text-center mx-auto max-w-3xl' : ''}`}>
            <div className="mb-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-500 text-white animate-fadeInDown">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Stiftelseguiden.se
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-[700] mb-4 leading-tight text-white animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              {title}
              <span className="text-accent-300">.</span>
            </h1>
            
            {subtitle && (
              <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                {subtitle}
              </p>
            )}
            
            <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              {children}
            </div>
            
            {/* Metrics row - Adding visual credibility */}
            <div className="flex flex-wrap gap-6 mb-8 mt-2 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2 hover-grow">
                <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-bold">3000+</div>
                  <div className="text-xs text-white/70">Stiftelser</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 hover-grow">
                <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-bold">2.5 mdr</div>
                  <div className="text-xs text-white/70">Beviljat årligen</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 hover-grow">
                <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-bold">180+</div>
                  <div className="text-xs text-white/70">År av historia</div>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            {(primaryCta || secondaryCta) && (
              <div className={`flex flex-wrap gap-4 mt-8 ${align === 'center' ? 'justify-center' : ''} animate-fadeInUp`} style={{ animationDelay: '0.5s' }}>
                {/* Primary CTA Button */}
                {primaryCta && (
                  primaryCta.external ? (
                    <a 
                      href={primaryCta.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-6 py-3 bg-white text-primary-700 rounded-md font-[500] hover:bg-white/90 transition-all hover:shadow-lg inline-flex items-center justify-center shadow-md hover-lift"
                    >
                      <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      {primaryCta.text}
                    </a>
                  ) : (
                    <Link 
                      href={primaryCta.href} 
                      className="px-6 py-3 bg-white text-primary-700 rounded-md font-[500] hover:bg-white/90 transition-all hover:shadow-lg inline-flex items-center justify-center shadow-md hover-lift"
                    >
                      <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      {primaryCta.text}
                    </Link>
                  )
                )}
                
                {/* Secondary CTA Button */}
                {secondaryCta && (
                  secondaryCta.external ? (
                    <a 
                      href={secondaryCta.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-6 py-3 bg-accent-500 text-white rounded-md font-[500] hover:bg-accent-400 transition-all hover:shadow-lg inline-flex items-center justify-center shadow-md hover-lift"
                    >
                      <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      {secondaryCta.text}
                    </a>
                  ) : (
                    <Link 
                      href={secondaryCta.href} 
                      className="px-6 py-3 bg-accent-500 text-white rounded-md font-[500] hover:bg-accent-400 transition-all hover:shadow-lg inline-flex items-center justify-center shadow-md hover-lift"
                    >
                      <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      {secondaryCta.text}
                    </Link>
                  )
                )}
              </div>
            )}
            
            {/* Trust badges */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs uppercase tracking-wider text-white/50 mb-2">Pålitlig information från:</p>
              <div className="flex space-x-6 items-center">
                <div className="text-white/80 text-sm font-medium">Länsstyrelsen</div>
                <div className="text-white/80 text-sm font-medium">Skatteverket</div>
                <div className="text-white/80 text-sm font-medium">Kammarkollegiet</div>
              </div>
            </div>
          </div>
          
          {/* Right side image component */}
          {imageComponent && (
            <div className="w-full md:w-1/2 flex justify-center">
              {imageComponent}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
