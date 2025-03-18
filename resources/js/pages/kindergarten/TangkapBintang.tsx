import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Star from '@/assets/elemenbintangjatuh.svg';
import Astronot from '@/assets/elemenastronot.svg';
import Roket from '@/assets/elemenroket.svg';
import Overlay from '@/assets/overlay.png';

interface GameStar {
    id: number;
    x: number;
    y: number;
    caught: boolean;
    type: 'normal' | 'powerup';
    powerupType?: 'double' | 'slow' | 'shield';
}

const TangkapBintang = () => {
    const [gameActive, setGameActive] = useState(false);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [stars, setStars] = useState<GameStar[]>([]);
    const [powerups, setPowerups] = useState<{
        double: boolean;
        slow: boolean;
        shield: boolean;
    }>({
        double: false,
        slow: false,
        shield: false
    });
    const [combo, setCombo] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [showTutorial, setShowTutorial] = useState(true);
    const [navbarVisible, setNavbarVisible] = useState(false);
    const gameAreaRef = useRef<HTMLDivElement>(null);
    const gameIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const comboTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Fungsi untuk menyembunyikan navbar saat bermain game
    useEffect(() => {
        const navbar = document.querySelector('.kindergarten-navbar');
        const showNavbarButton = document.querySelector('.show-navbar-button');
        
        if (gameActive || showTutorial) {
            // Sembunyikan navbar
            if (navbar) {
                navbar.classList.add('navbar-hidden');
            }
            
            // Tampilkan tombol untuk menampilkan navbar
            if (showNavbarButton) {
                showNavbarButton.classList.add('visible');
            }
        } else {
            // Tampilkan navbar kembali
            if (navbar) {
                navbar.classList.remove('navbar-hidden');
            }
            
            // Sembunyikan tombol untuk menampilkan navbar
            if (showNavbarButton) {
                showNavbarButton.classList.remove('visible');
            }
        }
        
        return () => {
            // Pastikan navbar kembali terlihat saat komponen unmount
            if (navbar) {
                navbar.classList.remove('navbar-hidden');
            }
            
            // Pastikan tombol untuk menampilkan navbar tersembunyi saat komponen unmount
            if (showNavbarButton) {
                showNavbarButton.classList.remove('visible');
            }
        };
    }, [gameActive, showTutorial]);

    // Fungsi untuk menampilkan/menyembunyikan navbar
    const toggleNavbar = () => {
        const navbar = document.querySelector('.kindergarten-navbar');
        
        if (navbar) {
            if (navbarVisible) {
                navbar.classList.add('navbar-hidden');
            } else {
                navbar.classList.remove('navbar-hidden');
            }
            
            setNavbarVisible(!navbarVisible);
        }
    };

    // Fungsi untuk memulai game
    const startGame = () => {
        setScore(0);
        setTimeLeft(30);
        setStars([]);
        setPowerups({
            double: false,
            slow: false,
            shield: false
        });
        setCombo(0);
        setShowTutorial(false);
        setGameActive(true);
        setNavbarVisible(false);

        // Generate bintang-bintang awal
        generateStars();

        // Set interval untuk countdown dan generate bintang baru
        gameIntervalRef.current = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    if (gameIntervalRef.current) clearInterval(gameIntervalRef.current);
                    if (score > highScore) setHighScore(score);
                    return 0;
                }
                if (prev % 3 === 0) {
                    generateStars(1);
                }
                return prev - 1;
            });
        }, 1000);
    };

    // Fungsi untuk generate bintang
    const generateStars = (count = 5) => {
        if (!gameAreaRef.current) return;

        const { width, height } = gameAreaRef.current.getBoundingClientRect();
        const newStars: GameStar[] = [];

        for (let i = 0; i < count; i++) {
            const isPowerup = Math.random() < 0.2; // 20% chance for powerup
            const powerupType = isPowerup ? ['double', 'slow', 'shield'][Math.floor(Math.random() * 3)] as 'double' | 'slow' | 'shield' : undefined;

            newStars.push({
                id: Date.now() + i,
                x: Math.random() * (width - 40),
                y: Math.random() * (height - 40),
                caught: false,
                type: isPowerup ? 'powerup' : 'normal',
                powerupType
            });
        }

        setStars(prev => [...prev, ...newStars]);
    };

    // Fungsi untuk menangkap bintang
    const catchStar = (star: GameStar) => {
        if (star.caught) return;

        setStars(prev =>
            prev.map(s =>
                s.id === star.id ? { ...s, caught: true } : s
            )
        );

        // Handle powerup
        if (star.type === 'powerup' && star.powerupType) {
            setPowerups(prev => ({
                ...prev,
                [star.powerupType!]: true
            }));

            // Reset powerup after 5 seconds
            setTimeout(() => {
                setPowerups(prev => ({
                    ...prev,
                    [star.powerupType!]: false
                }));
            }, 5000);
        }

        // Calculate score with combo
        const baseScore = 10;
        const comboMultiplier = Math.min(combo + 1, 5);
        const powerupMultiplier = powerups.double ? 2 : 1;
        const finalScore = baseScore * comboMultiplier * powerupMultiplier;

        setScore(prev => prev + finalScore);
        setCombo(prev => prev + 1);

        // Reset combo after 2 seconds
        if (comboTimeoutRef.current) clearTimeout(comboTimeoutRef.current);
        comboTimeoutRef.current = setTimeout(() => {
            setCombo(0);
        }, 2000);
    };

    // Cleanup saat komponen unmount
    useEffect(() => {
        return () => {
            if (gameIntervalRef.current) clearInterval(gameIntervalRef.current);
            if (comboTimeoutRef.current) clearTimeout(comboTimeoutRef.current);
        };
    }, []);

    // Reset game saat waktu habis
    useEffect(() => {
        if (timeLeft === 0) {
            setGameActive(false);
        }
    }, [timeLeft]);

    return (
        <section id="game" className="game-section">
            <div className="game-overlay" style={{ backgroundImage: `url(${Overlay})` }}></div>
            
            {/* Tombol untuk menampilkan/menyembunyikan navbar */}
            <button 
                className="show-navbar-button" 
                onClick={toggleNavbar}
                aria-label={navbarVisible ? "Sembunyikan Menu" : "Tampilkan Menu"}
            >
                {navbarVisible ? "×" : "≡"}
            </button>
            
            <div className="game-content">
                <div className="game-intro">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        Tangkap Bintang
                    </motion.h1>
                    
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Permainan seru untuk melatih ketangkasan dan kecepatan
                    </motion.p>
                    
                    {!gameActive && !showTutorial && (
                        <motion.div 
                            className="game-stats-display"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            <h3>Skor Terakhir: {score}</h3>
                            <h3>Skor Tertinggi: {highScore}</h3>
                            <motion.button 
                                className="start-game-button"
                                onClick={() => setShowTutorial(true)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Main Lagi
                            </motion.button>
                        </motion.div>
                    )}
                    
                    {!gameActive && !showTutorial && (
                        <div className="game-decorations">
                            <motion.img 
                                src={Astronot} 
                                alt="Astronot" 
                                className="game-decoration astronaut"
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 5, 0, -5, 0]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <motion.img 
                                src={Roket} 
                                alt="Roket" 
                                className="game-decoration rocket"
                                animate={{
                                    x: [0, 30, 0, -30, 0],
                                    y: [0, -15, 0, -5, 0],
                                    rotate: [0, 10, 0, -10, 0]
                                }}
                                transition={{
                                    duration: 7,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <motion.img 
                                src={Star} 
                                alt="Bintang" 
                                className="game-decoration star"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 360]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />
                        </div>
                    )}
                </div>
                
                {(gameActive || showTutorial) && (
                    <div className="game-container">
                        <div className="game-header">
                            <div className="game-stats">
                                <div className="game-score">Skor: {score}</div>
                                <div className="game-high-score">High Score: {highScore}</div>
                                <div className="game-timer">Waktu: {timeLeft}s</div>
                            </div>
                            <div className="game-powerups">
                                <div className={`powerup-indicator ${powerups.double ? 'active' : ''}`}>
                                    <span>2x</span>
                                </div>
                                <div className={`powerup-indicator ${powerups.slow ? 'active' : ''}`}>
                                    <span>⏰</span>
                                </div>
                                <div className={`powerup-indicator ${powerups.shield ? 'active' : ''}`}>
                                    <span>🛡️</span>
                                </div>
                            </div>
                        </div>

                        <div className="game-area" ref={gameAreaRef}>
                            <AnimatePresence>
                                {stars.map(star => (
                                    <motion.div
                                        key={star.id}
                                        className={`game-star ${star.type} ${star.caught ? 'caught' : ''}`}
                                        style={{ left: star.x, top: star.y }}
                                        initial={{ scale: 0, rotate: 0 }}
                                        animate={{
                                            scale: star.caught ? [1, 1.5, 0] : 1,
                                            rotate: star.type === 'powerup' ? 360 : 0
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            rotate: { duration: 2, repeat: Infinity, ease: "linear" }
                                        }}
                                        onClick={() => !star.caught && catchStar(star)}
                                    >
                                        <img src={Star} alt="Star" />
                                        {star.type === 'powerup' && (
                                            <span className="powerup-icon">
                                                {star.powerupType === 'double' ? '2x' :
                                                    star.powerupType === 'slow' ? '⏰' : '🛡️'}
                                            </span>
                                        )}
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            <motion.div
                                className="game-character"
                                animate={{
                                    x: [0, 20, 0, -20, 0],
                                    y: [0, -10, 0, -5, 0]
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 5,
                                    ease: "easeInOut"
                                }}
                            >
                                <img src={Astronot} alt="Astronaut" />
                            </motion.div>

                            {combo > 0 && (
                                <motion.div
                                    className="combo-text"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                >
                                    Combo x{combo}!
                                </motion.div>
                            )}
                        </div>

                        {timeLeft === 0 && (
                            <motion.div
                                className="game-over"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3>Permainan Selesai!</h3>
                                <p>Skor Anda: {score}</p>
                                <p>High Score: {highScore}</p>
                                <button onClick={startGame}>Main Lagi</button>
                            </motion.div>
                        )}

                        {showTutorial && (
                            <motion.div
                                className="game-tutorial"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <h3>Tangkap Bintang</h3>
                                <ul>
                                    <li>Klik bintang untuk mendapatkan poin (10 poin per bintang)</li>
                                    <li>Bintang berputar adalah power-up dengan efek khusus:</li>
                                    <li>2x: Dua kali lipat poin untuk semua bintang</li>
                                    <li>⏰: Memperlambat waktu permainan</li>
                                    <li>🛡️: Melindungi dari kehilangan combo</li>
                                    <li>Tangkap bintang berturut-turut untuk mendapatkan combo dan poin bonus!</li>
                                </ul>
                                <motion.button 
                                    onClick={startGame}
                                    className="start-game-button"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Mulai Game
                                </motion.button>
                            </motion.div>
                        )}
                    </div>
                )}
            </div>
            
            <div className="wave-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    );
};

export default TangkapBintang; 