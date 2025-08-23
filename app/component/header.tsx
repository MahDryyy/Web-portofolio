'use client';

import { SiReact, SiNextdotjs, SiGo, SiLaravel, SiTypescript, SiTailwindcss, SiGithub } from 'react-icons/si';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function Header() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative h-screen">
      {/* Background Image dengan Blur */}
      <div className="absolute inset-0">
        <Image
          src="/bg.jpeg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-8">
        <div className="text-center text-white max-w-4xl">
          {/* Profile Image */}
          <div className="mb-8" data-aos="fade-down" data-aos-delay="200">
            <Image
              src="/mahdi.png"
              alt="Mahdi Jamaludin - Full Stack Developer"
              width={200}
              height={200}
              className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full border-4 border-white/30 shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-up" data-aos-delay="300">
            Mahdi Jamaludin
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="400">
            Full Stack Developer
          </p>

          {/* Skills Icons */}
          <div className="flex flex-wrap justify-center gap-6 mb-8" data-aos="fade-up" data-aos-delay="500">
            <div className="group" data-aos="fade-up" data-aos-delay="600">
              <SiReact 
                className="text-6xl text-blue-400 hover:text-blue-300 transition-colors duration-300 hover:scale-110" 
                title="React"
              />
            </div>
            <div className="group" data-aos="fade-up" data-aos-delay="700">
              <SiNextdotjs 
                className="text-6xl text-white hover:text-gray-300 transition-colors duration-300 hover:scale-110" 
                title="Next.js"
              />
            </div>
            <div className="group" data-aos="fade-up" data-aos-delay="800">
              <SiGo 
                className="text-6xl text-blue-500 hover:text-blue-400 transition-colors duration-300 hover:scale-110" 
                title="Golang"
              />
            </div>
            <div className="group" data-aos="fade-up" data-aos-delay="900">
              <SiLaravel 
                className="text-6xl text-red-500 hover:text-red-400 transition-colors duration-300 hover:scale-110" 
                title="Laravel"
              />
            </div>
            <div className="group" data-aos="fade-up" data-aos-delay="1000">
              <SiTypescript 
                className="text-6xl text-blue-600 hover:text-blue-500 transition-colors duration-300 hover:scale-110" 
                title="TypeScript"
              />
            </div>
            <div className="group" data-aos="fade-up" data-aos-delay="1100">
              <SiTailwindcss 
                className="text-6xl text-cyan-400 hover:text-cyan-300 transition-colors duration-300 hover:scale-110" 
                title="Tailwind CSS"
              />
            </div>
            <div className="group" data-aos="fade-up" data-aos-delay="1200">
              <SiGithub 
                className="text-6xl text-gray-300 hover:text-white transition-colors duration-300 hover:scale-110" 
                title="GitHub"
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="1300">
            Passionate developer yang fokus pada pengembangan web dan mobile app. 
            Menggunakan teknologi modern untuk menciptakan solusi yang inovatif dan user-friendly.
          </p>
        </div>
      </div>
    </div>
  );
}
