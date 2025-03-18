import React from 'react';
import Planet from '@/assets/iconplanet.png';
import Star from '@/assets/elemenbintangkecil.svg';
import Ring from '@/assets/elemencincin.svg';
import Daycare from '@/assets/icondaycare.png';
import Galaxy from '@/assets/icongalaxy.png';
import StarIcon from '@/assets/iconbintang.png';


const About = () => {
    return (
        <section id="tentang" className="about-section">
            <div className="about-container">
                <div className="about-image" data-aos="fade-right">
                    <img src={Planet} alt="Tentang Kami" className="main-image" />
                    <div className="floating-elements">
                        <img src={Star} alt="Bintang" className="star-small" />
                        <img src={Ring} alt="Cincin" className="ring-element" />
                    </div>
                </div>
                <div className="about-content" data-aos="fade-left">
                    <h2>Tentang Taman Ceria</h2>
                    <p>Taman Ceria adalah taman kanak-kanak yang didedikasikan untuk memberikan pendidikan berkualitas tinggi dalam lingkungan yang menyenangkan dan penuh kasih sayang.</p>
                    <p>Kami percaya bahwa setiap anak memiliki potensi unik yang perlu dikembangkan melalui pendekatan pembelajaran yang holistik.</p>
                    <div className="about-features">
                        <div className="feature" data-aos="zoom-in" data-aos-delay="100">
                            <img src={Daycare} alt="Perawatan" />
                            <h3>Perawatan Penuh Kasih</h3>
                        </div>
                        <div className="feature" data-aos="zoom-in" data-aos-delay="200">
                            <img src={Galaxy} alt="Kreativitas" />
                            <h3>Pengembangan Kreativitas</h3>
                        </div>
                        <div className="feature" data-aos="zoom-in" data-aos-delay="300">
                            <img src={StarIcon} alt="Pembelajaran" />
                            <h3>Pembelajaran Interaktif</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 