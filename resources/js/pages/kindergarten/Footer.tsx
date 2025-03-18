import React from 'react';
import Logo from '@/assets/logoalbiruni.png';

const Footer = () => {
    return (
        <footer className="kindergarten-footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={Logo} alt="Taman Ceria Logo" />
                    <h2>Al-Biruni Preschool-Daycare</h2>
                    <p>Tempat di mana anak-anak belajar, bermain, dan tumbuh dengan ceria</p>
                </div>
                
                <div className="footer-links">
                    <div className="footer-section">
                        <h3>Tautan Cepat</h3>
                        <ul>
                            <li><a href="#beranda">Beranda</a></li>
                            <li><a href="#tentang">Tentang Kami</a></li>
                            <li><a href="#program">Program</a></li>
                            <li><a href="#galeri">Galeri</a></li>
                            <li><a href="#guru">Guru</a></li>
                            <li><a href="#kontak">Kontak</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h3>Program</h3>
                        <ul>
                            <li><a href="#program">Kelas Bermain</a></li>
                            <li><a href="#program">Kelas TK A</a></li>
                            <li><a href="#program">Kelas TK B</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h3>Kontak</h3>
                        <ul>
                            <li>Jl. Pendidikan No. 123, Kota Ceria</li>
                            <li>+62 123 4567 890</li>
                            <li>info@tamanceria.ac.id</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                </div>
                <p>&copy; {new Date().getFullYear()} Taman Ceria. Hak Cipta Dilindungi.</p>
            </div>
        </footer>
    );
};

export default Footer; 