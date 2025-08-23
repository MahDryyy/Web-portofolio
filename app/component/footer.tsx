'use client';
import React from 'react';
import { SiGithub, SiLinkedin, SiInstagram, SiGmail, SiWhatsapp } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <footer className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-500/30"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Contact Section */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Let's Connect
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Saya selalu terbuka untuk kolaborasi, project baru, atau sekedar ngobrol tentang teknologi. 
                Jangan ragu untuk menghubungi saya!
              </p>
            </div>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-all duration-300">
                  <SiGmail size={24} className="text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <a 
                    href="mailto:mahdi.jamaludin@binus.ac.id" 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    mahdi.jamaludin@binus.ac.id
                  </a>
                </div>
              </div>
              
              {/* WhatsApp */}
              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-all duration-300">
                  <SiWhatsapp size={24} className="text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">WhatsApp</h3>
                  <a 
                    href="https://wa.me/6281343222376" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                  >
                    +62 813-4322-2376
                  </a>
                </div>
              </div>
              
              {/* Location */}
              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-all duration-300">
                  <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Location</h3>
                  <p className="text-gray-300">Malang, East Java, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Media Section */}
          <div className="space-y-8" data-aos="fade-left">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Follow Me
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Ayo berteman dengan saya di social media!
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {/* GitHub */}
              <a 
                href="https://github.com/Mahdryyy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col items-center space-y-3">
                    <SiGithub size={40} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">GitHub</span>
                  </div>
                </div>
              </a>
              
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/mahdi-jamaludin-755239380/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col items-center space-y-3">
                    <SiLinkedin size={40} className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">LinkedIn</span>
                  </div>
                </div>
              </a>
              
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/mahhbroo?igsh=aXN0bm16bWV2Mmxk&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col items-center space-y-3">
                    <SiInstagram size={40} className="text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">Instagram</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center" data-aos="fade-up">
          <p className="text-gray-400 text-sm">
            © 2024 Mahdi Jamaludin. Made with ❤️ using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
