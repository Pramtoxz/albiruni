import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RocketIcon from '@/assets/elemenroket.svg';
import AstronautIcon from '@/assets/elemenastronot.svg';
import PlanetIcon from '@/assets/iconplanet.png';

const Programs = () => {
    const [activeProgram, setActiveProgram] = useState(0);
    
    const programs = [
        {
            title: "Playgroup (2-3 tahun)",
            description: "Program untuk balita yang fokus pada pengembangan motorik dan sosial melalui permainan interaktif. Anak-anak akan belajar bersosialisasi, mengembangkan keterampilan motorik halus dan kasar, serta diperkenalkan pada konsep dasar melalui bermain.",
            icon: PlanetIcon,
            color: "#FF6B6B",
            features: ["Bermain Sensori", "Musik & Gerakan", "Aktivitas Kelompok", "Pengembangan Bahasa"]
        },
        {
            title: "TK A (4-5 tahun)",
            description: "Program untuk anak-anak yang mempersiapkan mereka untuk keterampilan dasar akademik dan sosial. Kurikulum kami mencakup pengenalan huruf dan angka, pengembangan bahasa, seni, dan aktivitas yang merangsang kreativitas.",
            icon: AstronautIcon,
            color: "#1E88E5",
            features: ["Pengenalan Huruf & Angka", "Seni & Kreativitas", "Eksplorasi Sains", "Keterampilan Sosial"]
        },
        {
            title: "TK B (5-6 tahun)",
            description: "Program persiapan sekolah dasar yang mengembangkan keterampilan membaca, menulis, dan berhitung. Anak-anak akan dipersiapkan untuk transisi ke sekolah dasar dengan fokus pada kemandirian dan keterampilan akademik.",
            icon: RocketIcon,
            color: "#FFD166",
            features: ["Membaca Awal", "Menulis", "Matematika Dasar", "Proyek Tematik"]
        }
    ];

    return (
        <section id="program" className="programs-section">
            <div className="wave-top">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#f8f9fa" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
            </div>
            
            <div className="programs-container">
                <h2 data-aos="fade-up">Program Pembelajaran Kami</h2>
                <p data-aos="fade-up" data-aos-delay="100">Kami menawarkan berbagai program yang dirancang untuk memenuhi kebutuhan perkembangan anak-anak di setiap tahap.</p>
                
                <div className="programs-tabs-container" data-aos="fade-up" data-aos-delay="200">
                    <div className="programs-tabs">
                        {programs.map((program, index) => (
                            <div 
                                key={index} 
                                className={`program-tab ${activeProgram === index ? 'active' : ''}`}
                                onClick={() => setActiveProgram(index)}
                                style={{
                                    '--tab-color': program.color
                                } as React.CSSProperties}
                            >
                                <div className="program-tab-icon">
                                    <img src={program.icon} alt={program.title} />
                                </div>
                                <h3>{program.title}</h3>
                            </div>
                        ))}
                    </div>
                    
                    <div className="program-content-container">
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={activeProgram}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="program-content"
                                style={{
                                    '--content-color': programs[activeProgram].color
                                } as React.CSSProperties}
                            >
                                <div className="program-content-header">
                                    <div className="program-content-icon">
                                        <img src={programs[activeProgram].icon} alt={programs[activeProgram].title} />
                                    </div>
                                    <h3>{programs[activeProgram].title}</h3>
                                </div>
                                
                                <p>{programs[activeProgram].description}</p>
                                
                                <div className="program-features">
                                    {programs[activeProgram].features.map((feature, idx) => (
                                        <div key={idx} className="program-feature">
                                            <div className="feature-icon">
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                <button className="learn-more">Pelajari Lebih Lanjut</button>
                            </motion.div>
                        </AnimatePresence>
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

export default Programs; 