'use client';
import CardStack from './component/cardstack';
import Header from './component/header';
import Footer from './component/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';


export default function Home() {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
  return (
    <main>
      <button
        className="fixed top-4 right-4 z-50 
                  bg-black text-green-400 
                  font-mono px-4 py-2 rounded border border-green-500 
                  shadow-md hover:bg-green-600 hover:text-black 
                  transition duration-200 hover:scale-105" data-aos="fade-up" data-aos-delay="300"
        onClick={() => window.location.href = '/terminal/index.html'}
      >
        <span className="mr-1">&gt;_</span> Terminal
      </button>
      
      <Header />
      <CardStack/>
      <Footer/>


    </main>
  );
}
