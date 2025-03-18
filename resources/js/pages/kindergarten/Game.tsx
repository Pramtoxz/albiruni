import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Star from '@/assets/elemenbintangjatuh.svg';
import Astronot from '@/assets/elemenastronot.svg';

interface GameStar {
    id: number;
    x: number;
    y: number;
    caught: boolean;
    type: 'normal' | 'powerup';
    powerupType?: 'double' | 'slow' | 'shield';
}

const Game = () => {
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
    const gameAreaRef = useRef<HTMLDivElement>(null);
    const gameIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const comboTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
            // Game selesai
        }
    }, [timeLeft]);

    return (
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
    );
};

export default Game; 