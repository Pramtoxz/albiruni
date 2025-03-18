import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import Logo from '@/assets/logoalbiruni.webp';


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`kindergarten-navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="logo">
                    <img src={Logo} alt="Al-Biruni Logo" />
                </div>
                
                <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <Link href="#beranda">Beranda</Link>
                    <Link href="#tentang">Tentang Kami</Link>
                    <Link href="#program">Program</Link>
                    <Link href="#galeri">Galeri</Link>
                    <Link href="#guru">Guru</Link>
                    <Link href="#kontak">Kontak</Link>
                </div>
                
                <div className="mobile-menu-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 