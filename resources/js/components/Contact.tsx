import React from 'react';
import { motion } from 'framer-motion';
import PhoneIcon from '@/assets/iconplanet.png';
import EmailIcon from '@/assets/iconplanet.png';
import LocationIcon from '@/assets/iconplanet.png';
import InstagramIcon from '@/assets/iconplanet.png';
import FacebookIcon from '@/assets/iconplanet.png';
import YoutubeIcon from '@/assets/iconplanet.png';
import TwitterIcon from '@/assets/iconplanet.png';

const Contact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="contact" className="contact-section">
      <motion.h2 
        className="section-title"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Hubungi Kami
      </motion.h2>

      <motion.div 
        className="contact-container"
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="contact-info"
          variants={fadeInUp}
        >
          <motion.div 
            className="info-item"
            whileHover={{ scale: 1.05 }}
          >
            <img src={LocationIcon} alt="Lokasi" />
            <h3>Lokasi</h3>
            <p>Jl. Contoh No. 123, Jakarta</p>
          </motion.div>

          <motion.div 
            className="info-item"
            whileHover={{ scale: 1.05 }}
          >
            <img src={PhoneIcon} alt="Telepon" />
            <h3>Telepon</h3>
            <p>+62 123 4567 890</p>
          </motion.div>

          <motion.div 
            className="info-item"
            whileHover={{ scale: 1.05 }}
          >
            <img src={EmailIcon} alt="Email" />
            <h3>Email</h3>
            <p>info@albirunipreschool.com</p>
          </motion.div>

          <div className="social-icons">
            {[
              { icon: InstagramIcon, link: '#' },
              { icon: FacebookIcon, link: '#' },
              { icon: TwitterIcon, link: '#' },
              { icon: YoutubeIcon, link: '#' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
              >
                <img src={social.icon} alt="Social Media" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.form 
          className="contact-form"
          variants={fadeInUp}
          onSubmit={(e) => {
            e.preventDefault();
            // Handle form submission
          }}
        >
          <motion.div className="form-group">
            <motion.input 
              type="text" 
              placeholder="Nama Lengkap"
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>

          <motion.div className="form-group">
            <motion.input 
              type="email" 
              placeholder="Email"
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>

          <motion.div className="form-group">
            <motion.input 
              type="tel" 
              placeholder="Nomor Telepon"
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>

          <motion.div className="form-group">
            <motion.textarea 
              placeholder="Pesan"
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>

          <motion.button 
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Kirim Pesan
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact; 