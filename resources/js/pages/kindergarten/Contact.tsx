import React from 'react';

const Contact = () => {
    return (
        <section id="kontak" className="contact-section">
            <div className="contact-container">
                <div className="contact-info" data-aos="fade-right">
                    <h2>Hubungi Kami</h2>
                    <p>Jika Anda memiliki pertanyaan atau ingin mendaftarkan anak Anda, silakan hubungi kami.</p>
                    
                    <div className="contact-details">
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <div>
                                <h3>Alamat</h3>
                                <p>Jl. Pendidikan No. 123, Kota Ceria, Indonesia</p>
                            </div>
                        </div>
                        
                        <div className="contact-item">
                            <i className="fas fa-phone"></i>
                            <div>
                                <h3>Telepon</h3>
                                <p>+62 123 4567 890</p>
                            </div>
                        </div>
                        
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <div>
                                <h3>Email</h3>
                                <p>info@tamanceria.ac.id</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="visit-info" data-aos="fade-left">
                    <h2>Kunjungi Kami</h2>
                    <div className="visit-card">
                        <div className="visit-icon">
                            <i className="fas fa-calendar-check"></i>
                        </div>
                        <div className="visit-content">
                            <h3>Jadwal Kunjungan</h3>
                            <p>Kami menerima kunjungan dari calon orang tua murid setiap:</p>
                            <ul>
                                <li><i className="fas fa-clock"></i> Senin - Jumat: 08.00 - 15.00 WIB</li>
                                <li><i className="fas fa-clock"></i> Sabtu: 08.00 - 12.00 WIB</li>
                            </ul>
                            <p className="visit-note">Untuk pengalaman terbaik, silakan buat janji terlebih dahulu melalui telepon atau WhatsApp.</p>
                            <a href="https://wa.me/6281234567890" className="whatsapp-button">
                                <i className="fab fa-whatsapp"></i> Hubungi via WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="map-container" data-aos="zoom-in">
                <h3>Lokasi Kami</h3>
                <div className="locations-grid">
                    <div className="location-item">
                        <h4>Lokasi Kubu Marapalam</h4>
                        <p>Jl. Marapalam Indah IX No. 1 Kubu Marapalam</p>
                        <div className="map">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.3105533063716!2d100.38!3d-0.94!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwNTYnMjQuMCJTIDEwMMKwMjInNDguMCJF!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid" 
                                width="100%" 
                                height="250" 
                                style={{ border: 0 }} 
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                    
                    <div className="location-item">
                        <h4>Lokasi Ulak Karang</h4>
                        <p>Jl. Yogyakarta B/16 Asratek Ulak Karang</p>
                        <div className="map">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.2805533063716!2d100.35!3d-0.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwNTQnMzYuMCJTIDEwMMKwMjEnMDAuMCJF!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid" 
                                width="100%" 
                                height="250" 
                                style={{ border: 0 }} 
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact; 