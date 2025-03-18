import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Logo from '@/assets/logoalbiruni.webp';
import AstronautKid from '@/assets/elemenastronot.svg';
import RocketImg from '@/assets/elemenroket.svg';
import ShootingStar from '@/assets/elemenbintangjatuh.svg';

interface HeroProps {
  scrollY: number;
}

const Hero = ({ scrollY }: HeroProps) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  return (
    <section className="hero-section">
      <div className="parallax-container" ref={parallaxRef} style={{
        transform: `translateY(${scrollY * 0.5}px)`
      }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div 
          className="logo-container"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <motion.img 
            src={Logo} 
            alt="Albiruni Preschool" 
            className="main-logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <motion.h1 
          className="tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Menjelajahi Masa Depan Melalui Pendidikan
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="cta-button"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(37, 99, 235, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Mulai Petualangan
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div 
        className="floating-elements"
        style={{ y: scrollY * -0.3 }}
      >
        <motion.img 
          src={AstronautKid} 
          alt="Astronaut"
          className="floating-astronaut"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut"
          }}
          whileHover={{ scale: 1.1, rotate: 10 }}
        />
        <motion.img 
          src={RocketImg} 
          alt="Rocket"
          className="floating-rocket"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 5, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut"
          }}
          whileHover={{ 
            y: -50,
            rotate: -15,
            transition: { duration: 0.4 }
          }}
        />
      </motion.div>

      <div className="shooting-stars">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="shooting-star"
            initial={{ x: -100, y: -100 }}
            animate={{
              x: [window.innerWidth + 100, -300],
              y: [-100, window.innerHeight + 100],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 4,
              delay: i * 2,
              repeat: Infinity,
              repeatDelay: 5
            }}
          >
            <img src={ShootingStar} alt="Shooting Star" />
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="scroll-indicator"
        animate={{
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          repeat: Infinity,
          duration: 2
        }}
      >
        <div className="scroll-text">Scroll untuk Menjelajah</div>
        <div className="scroll-arrow">↓</div>
      </motion.div>
    </section>
  );
};

export default Hero; 