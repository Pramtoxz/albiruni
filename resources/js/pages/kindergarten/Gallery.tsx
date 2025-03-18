import React, { useState } from 'react';

const Gallery = () => {
    // Simulasi data galeri
    const galleryImages = [
        { id: 1, src: "/assets/nebula.png", category: "kegiatan", title: "Kegiatan Melukis" },
        { id: 2, src: "/assets/komet.png", category: "kegiatan", title: "Bermain Bersama" },
        { id: 3, src: "/assets/iconplanet.png", category: "fasilitas", title: "Ruang Bermain" },
        { id: 4, src: "/assets/icongalaxy.png", category: "fasilitas", title: "Perpustakaan Mini" },
        { id: 5, src: "/assets/iconbintang.png", category: "acara", title: "Pentas Seni" },
        { id: 6, src: "/assets/icondaycare.png", category: "acara", title: "Wisuda TK" },
    ];

    const [filter, setFilter] = useState('semua');
    
    const filteredImages = filter === 'semua' 
        ? galleryImages 
        : galleryImages.filter(img => img.category === filter);

    return (
        <section id="galeri" className="gallery-section">
            <div className="gallery-container">
                <h2 data-aos="fade-up">Galeri Kegiatan</h2>
                <p data-aos="fade-up" data-aos-delay="100">Lihat berbagai kegiatan menyenangkan yang kami lakukan di Taman Ceria</p>
                
                <div className="gallery-filter" data-aos="fade-up" data-aos-delay="200">
                    <button 
                        className={filter === 'semua' ? 'active' : ''} 
                        onClick={() => setFilter('semua')}
                    >
                        Semua
                    </button>
                    <button 
                        className={filter === 'kegiatan' ? 'active' : ''} 
                        onClick={() => setFilter('kegiatan')}
                    >
                        Kegiatan
                    </button>
                    <button 
                        className={filter === 'fasilitas' ? 'active' : ''} 
                        onClick={() => setFilter('fasilitas')}
                    >
                        Fasilitas
                    </button>
                    <button 
                        className={filter === 'acara' ? 'active' : ''} 
                        onClick={() => setFilter('acara')}
                    >
                        Acara
                    </button>
                </div>
                
                <div className="gallery-grid" data-aos="fade-up" data-aos-delay="300">
                    {filteredImages.map((image) => (
                        <div key={image.id} className="gallery-item">
                            <img src={image.src} alt={image.title} />
                            <div className="gallery-overlay">
                                <h3>{image.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery; 