'use client';
import React, { useEffect } from 'react';
import { SiReact, SiNextdotjs, SiGo, SiLaravel, SiTypescript, SiTailwindcss, SiGithub } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <header className="relative min-h-screen flex items-center px-6  overflow-hidden">
      {/* Background Blur Layer */}
      <div
        className="absolute inset-0 bg-center bg-cover blur-sm brightness-75 overflow-hidden" data-aos = "zoom-in-up"
        style={{
          backgroundImage: "url('/bg.jpeg')", 
        }}
      ></div>

      {/* Overlay Content */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto z-10">
        {/* Kiri: Nama dan Skill */}
        <div className="flex flex-col justify-center" data-aos="fade-right">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md">
            Mahdi Jamaludin
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-200 drop-shadow-md mb-6">
            Full Stack Developer
          </p>
          
          {/* Skills Icons */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="group" data-aos="fade-up" data-aos-delay="0">
              <SiReact size={40} className="text-blue-400 hover:text-blue-300 transition-colors duration-300" title="React" />
            </div>
            <div className="group" data-aos="fade-up" data-aos-delay="100">
              <SiNextdotjs size={40} className="text-white hover:text-gray-300 transition-colors duration-300" title="Next.js" />
            </div>
            <div className="group" data-aos="fade-up" data-aos-delay="200">
              <SiGo size={40} className="text-blue-500 hover:text-blue-400 transition-colors duration-300" title="Golang" />
            </div>
            <div className="group" data-aos="fade-up" data-aos-delay="300">
              <SiLaravel size={40} className="text-red-500 hover:text-red-400 transition-colors duration-300" title="Laravel" />
            </div>
            <div className="group" data-aos="fade-up" data-aos-delay="400">
              <SiTypescript size={40} className="text-blue-600 hover:text-blue-500 transition-colors duration-300" title="TypeScript" />
            </div>
            <div className="group" data-aos="fade-up" data-aos-delay="500">
              <SiTailwindcss size={40} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300" title="Tailwind CSS" />
            </div>
            <div className="group" data-aos="fade-up" data-aos-delay="600">
              <SiGithub size={40} className="text-white hover:text-gray-300 transition-colors duration-300" title="GitHub" />
            </div>
          </div>
        </div>

        {/* Kanan: Foto */}
        <div className="flex justify-center items-center" data-aos="fade-left">
          <img
            src="/mahdi.png"
            alt="Mahdi Jamaludin - Full Stack Developer"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-white shadow-xl"
            data-aos="zoom-in"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
