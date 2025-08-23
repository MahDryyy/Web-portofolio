'use client';

import { SiGithub, SiLinkedin, SiInstagram, SiGmail, SiWhatsapp } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <footer className="bg-gradient-to-b from-[#1a1a2e] to-black text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Let's Connect Section */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let&apos;s Connect
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <SiGmail className="text-2xl text-red-400 group-hover:scale-110 transition-transform duration-300" />
                <a 
                  href="mailto:mahdi.jamaludin@binus.ac.id"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  mahdi.jamaludin@binus.ac.id
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <SiWhatsapp className="text-2xl text-green-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">📍</span>
                </div>
                <span className="text-gray-300">Malang, East Java, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Follow Me Section */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Follow Me
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <a 
                href="https://github.com/MahDryyy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <SiGithub className="text-4xl mx-auto mb-3 text-gray-300 group-hover:text-white transition-colors duration-300" />
                  <p className="text-center text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    GitHub
                  </p>
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/mahdi-jamaludin-755239380/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <SiLinkedin className="text-4xl mx-auto mb-3 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  <p className="text-center text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    LinkedIn
                  </p>
                </div>
              </a>
              
              <a 
                href="https://www.instagram.com/mahdi.jamaludin/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <SiInstagram className="text-4xl mx-auto mb-3 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
                  <p className="text-center text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    Instagram
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-gray-400">
            © 2024 Mahdi Jamaludin. Made with ❤️ using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
