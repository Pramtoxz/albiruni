import React from 'react';

const Teachers = () => {
    const teachers = [
        {
            name: "Ibu Sari",
            position: "Kepala Sekolah",
            image: "/assets/iconplanet.png",
            description: "Berpengalaman 15 tahun dalam pendidikan anak usia dini."
        },
        {
            name: "Ibu Dewi",
            position: "Guru TK A",
            image: "/assets/icongalaxy.png",
            description: "Spesialis dalam pengembangan kreativitas anak."
        },
        {
            name: "Bapak Budi",
            position: "Guru TK B",
            image: "/assets/iconbintang.png",
            description: "Ahli dalam metode pembelajaran interaktif."
        },
        {
            name: "Ibu Maya",
            position: "Guru Kelas Bermain",
            image: "/assets/icondaycare.png",
            description: "Fokus pada perkembangan motorik dan sosial balita."
        }
    ];

    return (
        <section id="guru" className="teachers-section">
            <div className="wave-top">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#f8f9fa" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
            </div>
            
            <div className="teachers-container">
                <h2 data-aos="fade-up">Tim Pengajar Kami</h2>
                <p data-aos="fade-up" data-aos-delay="100">Kenali para guru berpengalaman yang akan mendampingi anak-anak dalam belajar dan bermain</p>
                
                <div className="teachers-grid">
                    {teachers.map((teacher, index) => (
                        <div key={index} className="teacher-card" data-aos="flip-left" data-aos-delay={index * 100}>
                            <div className="teacher-image">
                                <img src={teacher.image} alt={teacher.name} />
                            </div>
                            <div className="teacher-info">
                                <h3>{teacher.name}</h3>
                                <h4>{teacher.position}</h4>
                                <p>{teacher.description}</p>
                            </div>
                        </div>
                    ))}
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

export default Teachers; 