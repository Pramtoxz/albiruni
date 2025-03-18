import React from 'react';
import { motion } from 'framer-motion';
import Logo from '@/assets/logoalbiruni.webp';
import Star from '@/assets/elemenbintangjatuh.svg';
import Astronot from '@/assets/elemenastronot.svg';
import Roket from '@/assets/elemenroket.svg';
import Overlay from '@/assets/overlay.png';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import HindariMeteor from './HindariMeteor';

const Hero = () => {
    return (
        <section id="beranda" className="hero-section">
            <div className="hero-overlay" style={{ backgroundImage: `url(${Overlay})` }}></div>
            
            <div className="hero-content">
                <div className="hero-text" data-aos="fade-right">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        Selamat Datang di Al-Biruni
                    </motion.h1>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Preschool & Daycare
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        Tempat di mana anak-anak belajar, bermain, dan tumbuh dengan ceria
                    </motion.p>
                    
                    <motion.p 
                        className="tagline"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                    >
                        Let's Explore The Universe
                    </motion.p>
                    
                    <div className="hero-buttons">
                        <motion.button 
                            className="cta-button"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.8 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Daftar Sekarang
                        </motion.button>
                        
                        <Dialog>
                            <DialogTrigger asChild>
                                <motion.button 
                                    className="game-button"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Main Game
                                </motion.button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] h-[80vh] p-0 bg-transparent border-none">
                                <HindariMeteor />
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
                
                <div className="hero-image" data-aos="fade-left">
                    <img src={Logo} alt="Al-Biruni Preschool" className="main-logo" />
                    <div className="floating-elements">
                        <img src={Star} alt="Bintang" className="star-element" />
                        <img src={Astronot} alt="Astronot" className="astronaut-element" />
                        <img src={Roket} alt="Roket" className="rocket-element" />
                    </div>
                </div>
            </div>
            
            <div className="wave-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero; 