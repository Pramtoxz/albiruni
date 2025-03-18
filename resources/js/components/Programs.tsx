import React from 'react';
import { motion } from 'framer-motion';
import StarIcon from '@/assets/iconbintang.png';
import PlanetIcon from '@/assets/iconplanet.png';
import GalaxyIcon from '@/assets/icongalaxy.png';
import DayCareIcon from '@/assets/icondaycare.png';

const programData = [
  {
    icon: StarIcon,
    title: "Playgroup",
    desc: "Program bermain dan belajar untuk usia 2-3 tahun",
    color: "#ffc107"
  },
  {
    icon: PlanetIcon,
    title: "TK A",
    desc: "Program pendidikan untuk usia 4-5 tahun",
    color: "#2196f3"
  },
  {
    icon: GalaxyIcon,
    title: "TK B",
    desc: "Program persiapan SD untuk usia 5-6 tahun",
    color: "#9c27b0"
  },
  {
    icon: DayCareIcon,
    title: "Day Care",
    desc: "Program penitipan anak dengan aktivitas edukatif",
    color: "#4caf50"
  }
];

const Programs = () => {
  return (
    <section className="programs-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Program Kami
        </motion.h2>

        <div className="program-cards">
          {programData.map((program, index) => (
            <motion.div
              key={program.title}
              className="program-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <div className="program-icon-wrapper">
                <motion.img 
                  src={program.icon}
                  alt={program.title}
                  className="program-icon"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.5 }
                  }}
                />
              </div>
              <h3>{program.title}</h3>
              <p>{program.desc}</p>
              <motion.button
                className="learn-more-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Pelajari Lebih Lanjut
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs; 