'use client'; // ← penting di Next.js App Router (biar bisa akses `useEffect`)

import { SiGo, SiReact, SiLaravel, SiTypescript, SiTailwindcss, SiGithub, SiNextdotjs, SiHtml5, SiCss3, SiJavascript, SiThreedotjs, SiPython } from 'react-icons/si';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos'
import 'aos/dist/aos.css'; 
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window {
    particlesJS: any;
  }
}

export default function CardStack() {
  const frontRef = useRef<HTMLDivElement>(null);
  const middleRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=3000',
          scrub: true,
          pin: true,
        },
      });

      tl.to(frontRef.current, {
        y: -1000,
        x: -200,
        rotate: 15,
        scale: 1.1,
        duration: 3,
      })
        .to(middleRef.current, {
        y: -1000,
        x: -200,
        rotate: 15,
        scale: 1.1,
        duration: 3,
        })
        .to(backRef.current, {
        y: -1000,
        x: -200,
        rotate: 15,
        scale: 1.1,
        duration: 3,
        });
    }, sectionRef);

    return () => ctx.revert(); 
  }, []);

  // Load script particles.js dari CDN
  useEffect(() => {
    // Load script particles.js dari CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    script.async = true;

    script.onload = () => {
      if (window.particlesJS) {
        // Particles untuk hero section
        window.particlesJS('particles-js', {
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 3 },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1,
            },
            move: { enable: true, speed: 3 },
          },
          interactivity: {
            events: {
              onhover: { enable: true, mode: 'repulse' },
              onclick: { enable: true, mode: 'push' },
            },
            modes: {
              repulse: { distance: 100 },
              push: { particles_nb: 4 },
            },
          },
          retina_detect: true,
        });

        // Particles untuk card section
        window.particlesJS('particles-js-cards', {
          particles: {
            number: { value: 60, density: { enable: true, value_area: 1000 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.4 },
            size: { value: 2 },
            line_linked: {
              enable: true,
              distance: 180,
              color: '#ffffff',
              opacity: 0.2,
              width: 1,
            },
            move: { enable: true, speed: 2 },
          },
          interactivity: {
            events: {
              onhover: { enable: true, mode: 'repulse' },
              onclick: { enable: true, mode: 'push' },
            },
            modes: {
              repulse: { distance: 120 },
              push: { particles_nb: 3 },
            },
          },
          retina_detect: true,
        });
      }
    };

    document.body.appendChild(script);

    // Cleanup script saat unmount
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
    
     <div className="relative h-screen">
        {/* Background Particles */}
        <div
          id="particles-js"
          className="absolute top-0 left-0 w-full h-full z-0 "
          style={{
            background: 'linear-gradient(to bottom,rgb(0, 0, 0), #1a1a2e)',
          }}
        ></div>

        {/* Konten utama */}
        <div className="relative z-10 flex items-center justify-center px-8 h-full pointer-events-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl w-full">
            <div className="flex justify-center" data-aos="fade-left">
              <Image
                src="/mahdi2.jpg"
                alt="Foto Profil"
                width={320}
                height={320}
                className="w-64 h-64 md:w-80 md:h-80 grayscale hover:grayscale-0 transition duration-1000 rounded-lg hover:rounded-2xl transition-all duration-300 object-cover border-4 border-white shadow-lg pointer-events-auto"
              />
            </div>
            <div data-aos="fade-right">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-4 whitespace-nowrap">
                Hi, I&apos;m Mahdi Jamaludin 👋
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Saya adalah Mahasiswa Binus@Malang yang fokus di pengembangan Full-Stack Web dan Mobile App. Saya terbiasa menggunakan React, Next.js, JavaScript, Expo, serta Golang dan Laravel untuk membangun aplikasi yang efisien dan responsif.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section ref={sectionRef} style={{ height: '100vh', position: 'relative', color: 'white', background: 'linear-gradient(to bottom, #1a1a2e,rgb(0, 0, 0))' }}>
        {/* Particles.js Background untuk Card Section */}
        <div
          id="particles-js-cards"
          className="absolute top-0 left-0 w-full h-full z-0"
        ></div>
        
        <h1 className="flex justify-center sm:text-4xl md:text-5xl lg:text-6xl font-serif  mb-8 tracking-tight font-bold  bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" data-aos="fade-up" data-aos-delay="500">
          My Projects
        </h1>
        <div className="card-stack pointer-events-none" data-aos="fade-up" data-aos-delay="300">
          {/* Card Elements */}
          <div className="card back flex flex-col items-center justify-center" ref={backRef}>
            <Image
              src="/three.png"
              alt="Project Three.js"
              width={320}
              height={224}
              className="w-4/5 h-56 object-fit rounded-xl mb-4 shadow-lg"
            />
            <h1 className="mb-3 text-black font-bold font-serif">3D Portfolio with Three.js</h1>
            <div className="flex gap-4 mt-4 text-3xl mb-4">
              <SiHtml5 color="#E44D26" />
              <SiJavascript color="#F7DF1E" />
              <SiThreedotjs color="#000000" />
            </div>
            <p className="text-black text-base md:text-lg text-center font-serif">
              Website portofolio interaktif yang memanfaatkan Three.js untuk menampilkan animasi dan visualisasi 3D secara real-time.<br /><br />
              Saya mengembangkan seluruh tampilan dan animasi 3D untuk meningkatkan pengalaman pengguna.
            </p>
          </div>
          
          <div className="card middle flex flex-col items-center justify-center" ref={middleRef}>
            <Image
              src="/anonim.png"
              alt="Project Anonymous Chat"
              width={320}
              height={224}
              className="w-4/5 h-56 object-cover rounded-xl mb-4 shadow-lg"
            />
            <h1 className='mb-3 text-white font-bold font-serif'>Anonymous Chat</h1>
            <div className="flex gap-4 mt-1 text-3xl mb-4">
              <SiGo color="#00ADD8"  />
              <SiHtml5 color="#E44D26" />
              <SiCss3 color="#1572B6" />
            </div>
            <p className="text-white text-base md:text-lg text-center font-serif">
              Anonymous Chat adalah aplikasi chat real-time berbasis WebSocket yang memungkinkan pengguna untuk terhubung dan berkomunikasi secara anonim tanpa perlu mendaftar.<br /><br />
              Saya mengembangkan aplikasi ini dengan fokus pada kecepatan, kemudahan, dan pengalaman pengguna yang interaktif.
            </p>
          </div>
          
          <div className="card front flex flex-col items-center justify-center" ref={frontRef}>
            <Image
              src="/savebite.jpg"
              alt="Project SaveBite"
              width={320}
              height={224}
              className="w-4/5 h-56 object-cover rounded-xl mb-4 shadow-lg"
            />
            <h1 className='mb-3 text-white font-bold font-serif'>SaveBite</h1>
            <div className="flex gap-4 mt-4 text-3xl mb-4">
              <SiGo color="#00ADD8" />
              <SiReact color="#61DBFB" />
              <SiLaravel color="#FF2D20" />
            </div>
            <p className="text-white text-base md:text-lg text-center font-serif">
              SaveBite adalah aplikasi yang membantu mengurangi food waste melalui pencatatan stok makanan, perencanaan menu, dan rekomendasi resep dari AI.<br /><br />
              Saya bertanggung jawab sebagai project leader dalam pengembangannya.
            </p>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-gradient-to-b from-black to-[#1a1a2e] text-white py-16 px-4 md:px-12" style={{ background: 'linear-gradient(to bottom, #000000, #1a1a2e)' }} > 
        
        {/* Container untuk layout yang lebih baik */}
        <div className="max-w-7xl mx-auto">
          {/* Layout: Mobile stacked, Desktop side-by-side */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center lg:space-x-12">
            
            {/* Education Section */}
            <div className="w-full lg:w-5/12 mb-12 lg:mb-0 flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 w-full max-w-lg">
                <div className="text-center mb-6">
                  <Image 
                    src="/binus.jpeg" 
                    alt="Binus University Logo" 
                    width={100} 
                    height={50} 
                    className='mx-auto mb-4 rounded-xl shadow-lg'
                  />
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Education
                  </h2>
                  <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
                </div>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="bg-white/5 rounded-2xl p-4 md:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-2 md:w-3 h-2 md:h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 font-semibold text-xs md:text-sm">Currently Studying</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Binus University Malang</h3>
                    <p className="text-gray-300 text-base md:text-lg mb-3">Computer Science</p>
                    <div className="flex items-center space-x-2 text-blue-300">
                      <span className="text-xs md:text-sm">🎓 Undergraduate Program</span>
                    </div>
                    <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-white/10">
                      <p className="text-gray-400 text-xs md:text-sm">
                        Fokus pada pengembangan software, algoritma, dan teknologi web modern
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-2xl p-4 md:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-2 md:w-3 h-2 md:h-3 bg-blue-400 rounded-full"></div>
                      <span className="text-blue-400 font-semibold text-xs md:text-sm">Additional Learning</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">Online Courses & Bootcamps</h3>
                    <p className="text-gray-300 text-xs md:text-sm">
                      Beelingua, Great Learning, dan berbagai platform online lainnya
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="w-full lg:w-5/12 flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 w-full max-w-lg">
                <div className="text-center mb-6 md:mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    Skills & Expertise
                  </h2>
                  <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full"></div>
                  <p className="text-gray-300 mt-3 text-sm md:text-base">Technologies I work with daily</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {/* Programming Languages */}
                  <div className="flex flex-col items-center space-y-2 md:space-y-3 group">
                    <div className="p-3 md:p-4 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                      <SiGo color="#00ADD8" size={40} />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 text-center">Golang</span>
                    <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-2 md:space-y-3 group">
                    <div className="p-3 md:p-4 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                      <SiReact color="#61DBFB" size={40} />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 text-center">React</span>
                    <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-2 md:space-y-3 group">
                    <div className="p-3 md:p-4 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                      <SiLaravel color="#FF2D20" size={40} />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 text-center">Laravel</span>
                    <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-red-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-2 md:space-y-3 group">
                    <div className="p-3 md:p-4 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                      <SiTypescript color="#3178C6" size={40} />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 text-center">TypeScript</span>
                    <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-2 md:space-y-3 group">
                    <div className="p-3 md:p-4 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                      <SiTailwindcss color="#06B6D4" size={40} />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 text-center">Tailwind</span>
                    <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-2 md:space-y-3 group">
                    <div className="p-3 md:p-4 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                      <SiGithub color="#181717" size={40} />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 text-center">GitHub</span>
                    <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </div>
                    <div className="flex flex-col items-center space-y-2 md:space-y-3 group">
                    <div className="p-3 md:p-4 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                      <SiPython color="#3776AB" size={40} />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 text-center">Python</span>
                    <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-2 md:space-y-3 group">
                    <div className="p-3 md:p-4 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                      <SiNextdotjs className="text-white group-hover:text-gray-300 transition-colors duration-300" title="Next.js" size={40} />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 text-center">Next.js</span>
                    <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-white to-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </div>
                </div>
                
                {/* Skills Categories */}
                <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/10">
                  <div className="grid grid-cols-1 gap-3 md:gap-4 text-center">
                    <div className="bg-white/5 rounded-xl p-3">
                      <span className="text-xs text-gray-400">Frontend</span>
                      <p className="text-xs md:text-sm text-white font-medium">React, Next.js, Tailwind</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3">
                      <span className="text-xs text-gray-400">Backend</span>
                      <p className="text-xs md:text-sm text-white font-medium">Golang, Laravel, Node.js, Python</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3">
                      <span className="text-xs text-gray-400">Tools</span>
                      <p className="text-xs md:text-sm text-white font-medium">Git, Docker, VS Code</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .card-stack {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card {
          position: absolute;
          width: 400px;
          height: 600px;
          border-radius: 20px;
          color: white;
          font-size: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          padding: 20px;
        }

        .back {
          background: #ffffffff ;
          z-index: 1;
          rotate: 15deg;
        }

        .middle {
          background:rgb(75, 131, 123);
          z-index: 2;
          rotate: 10deg;
        }

        .front {
          background: #000000ff ;
          z-index: 3;
          rotate: 3deg;
        }
      `}</style>
    </>
  );
}
