'use client';

import { SiReact, SiNextdotjs, SiGo, SiLaravel, SiTypescript, SiTailwindcss, SiGithub, SiPython } from 'react-icons/si';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Shuffle from './Shuffle';
import Orb from './Orb';
import '@fontsource/press-start-2p';

export default function Header() {
  useEffect(() => { 
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Background dengan Orb */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="w-96 h-96 md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] xl:w-[800px] xl:h-[800px]">
            <Orb
              hoverIntensity={0.8}
              rotateOnHover={true}
              hue={0}
              forceHoverState={false}
            />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-8 pointer-events-none">
        <div className="text-center text-white max-w-4xl">
          {/* Profile Image */}
          <div className="mb-6 pointer-events-auto" data-aos="fade-down" data-aos-delay="200">
            <Image
              src="/mahdi.png"
              alt="Mahdi Jamaludin - Full Stack Developer"
              width={200}
              height={200}
              className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 mx-auto rounded-full border-4 border-white/30 shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Name & Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 pointer-events-auto" data-aos="fade-up" data-aos-delay="400">
            <Shuffle
              text="Mahdi Jamaludin"
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover={true}
              respectReducedMotion={true}
            />
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6" data-aos="fade-up" data-aos-delay="400">
            Full Stack Developer
          </p>

          {/* Skills Icons */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6 pointer-events-auto" data-aos="fade-up" data-aos-delay="500">
            <div className="group" data-aos="fade-up" data-aos-delay="600">
              <SiReact 
                className="text-4xl md:text-5xl lg:text-6xl text-blue-400 hover:text-blue-300 transition-colors duration-300 hover:scale-110" 
                title="React"
              />
            </div>
            <div className="group" data-aos="fade-up" data-aos-delay="700">
              <SiNextdotjs 
                className="text-4xl md:text-5xl lg:text-6xl text-white hover:text-gray-300 transition-colors duration-300 hover:scale-110" 
                title="Next.js"
              />
            </div>
            <div className="group" data-aos="fade-up" data-aos-delay="800">
              <SiGo 
                className="text-4xl md:text-5xl lg:text-6xl text-blue-500 hover:text-blue-400 transition-colors duration-300 hover:scale-110" 
                title="Golang"
              />
            </div>
            <div className="group" data-aos="fade-up" data-aos-delay="850">
              <SiPython 
                className="text-4xl md:text-5xl lg:text-6xl text-yellow-500 hover:text-yellow-400 transition-colors duration-300 hover:scale-110" 
                title="Python"
              />
            </div>
            <div className="group" data-aos="fade-up" data-aos-delay="900">
              <SiLaravel 
                className="text-4xl md:text-5xl lg:text-6xl text-red-500 hover:text-red-400 transition-colors duration-300 hover:scale-110" 
                title="Laravel"
              />
            </div>
            <div className="group" data-aos="fade-up" data-aos-delay="950">
              <SiTypescript 
                className="text-4xl md:text-5xl lg:text-6xl text-blue-600 hover:text-blue-500 transition-colors duration-300 hover:scale-110" 
                title="TypeScript"
              />
            </div>
            <div className="group" data-aos="fade-up" data-aos-delay="1000">
              <SiTailwindcss 
                className="text-4xl md:text-5xl lg:text-6xl text-cyan-400 hover:text-cyan-300 transition-colors duration-300 hover:scale-110" 
                title="Tailwind CSS"
              />
            </div>
            <div className="group" data-aos="fade-up" data-aos-delay="1050">
              <SiGithub 
                className="text-4xl md:text-5xl lg:text-6xl text-gray-300 hover:text-white transition-colors duration-300 hover:scale-110" 
                title="GitHub"
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="1300">
            Passionate developer yang fokus pada pengembangan web dan mobile app. 
            Menggunakan teknologi modern untuk menciptakan solusi yang inovatif dan user-friendly.
          </p>
        </div>
      </div>
    </div>
  );
}
