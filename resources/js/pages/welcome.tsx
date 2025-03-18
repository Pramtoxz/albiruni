import React, { useEffect } from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/pages/kindergarten/Navbar';
import Hero from '@/pages/kindergarten/Hero';
import About from '@/pages/kindergarten/About';
import Programs from '@/pages/kindergarten/Programs';
import Gallery from '@/pages/kindergarten/Gallery';
import Teachers from '@/pages/kindergarten/Teachers';
import Contact from '@/pages/kindergarten/Contact';
import Footer from '@/pages/kindergarten/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../css/kindergarten.css';

export default function Welcome() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false,
        });
        
        // Tambahkan bintang-bintang ke background
        const createStars = () => {
            const starsContainer = document.createElement('div');
            starsContainer.className = 'background-stars';
            
            // Buat 100 bintang dengan posisi acak
            for (let i = 0; i < 100; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.top = `${Math.random() * 100}%`;
                star.style.left = `${Math.random() * 100}%`;
                star.style.width = `${Math.random() * 3 + 1}px`;
                star.style.height = star.style.width;
                starsContainer.appendChild(star);
            }
            
            document.body.appendChild(starsContainer);
        };
        
        createStars();
        
        return () => {
            const starsContainer = document.querySelector('.background-stars');
            if (starsContainer) {
                document.body.removeChild(starsContainer);
            }
        };
    }, []);

    return (
        <>
            <Head title="Al-Biruni - Preschool & Daycare" />
            <div className="kindergarten-container">
                <Navbar />
                <Hero />
                <About />
                <Programs />
                <Gallery />
                <Teachers />
                <Contact />
                <Footer />
            </div>
        </>
    );
}
