import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Asto from '@/assets/game/astro.png';
import Meteor from '@/assets/game/meteor.png';
import BgGame from '@/assets/game/bg-game.png';
import Kalah from '@/assets/game/kalah.svg';
import Success from '@/assets/game/success.svg';

const HindariMeteor = () => {
    const [gameActive, setGameActive] = useState(false);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [playerX, setPlayerX] = useState(1);
    const [meteors, setMeteors] = useState<{ id: number; lane: number; posY: number; }[]>([]);
    const [gameOver, setGameOver] = useState(false);
    const [showTutorial, setShowTutorial] = useState(true);
    const gameAreaRef = useRef<HTMLDivElement>(null);
    const gameHeightRef = useRef(0);

    // Dapatkan tinggi area game saat komponen dimount
    useEffect(() => {
        if (gameAreaRef.current) {
            gameHeightRef.current = gameAreaRef.current.clientHeight;
        }
    }, []);

    const startGame = () => {
        setGameActive(true);
        setScore(0);
        setTimeLeft(30);
        setPlayerX(1);
        setMeteors([]);
        setGameOver(false);
        setShowTutorial(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!gameActive || !gameAreaRef.current) return;

        const rect = gameAreaRef.current.getBoundingClientRect();
        const relativeX = e.clientX - rect.left;
        const lane = Math.floor((relativeX / rect.width) * 3);
        setPlayerX(Math.min(Math.max(0, lane), 2));
    };

    useEffect(() => {
        if (!gameActive) return;

        const gameInterval = setInterval(() => {
            setMeteors(prev => {
                const updated = prev.map(meteor => ({
                    ...meteor,
                    posY: meteor.posY + 5 // Bergerak 5 pixel setiap update
                })).filter(meteor => meteor.posY < gameHeightRef.current + 100); // Hapus meteor setelah benar-benar keluar layar

                // Cek tabrakan dengan pemain
                const collision = updated.some(meteor => 
                    meteor.lane === playerX && 
                    meteor.posY > gameHeightRef.current - 120 && 
                    meteor.posY < gameHeightRef.current - 40
                );

                if (collision) {
                    setGameActive(false);
                    setGameOver(true);
                }

                return updated;
            });

            // Generate meteor baru
            if (Math.random() < 0.02) {
                const newMeteor = {
                    id: Date.now(),
                    lane: Math.floor(Math.random() * 3),
                    posY: -100 // Mulai dari -100px di atas layar
                };
                setMeteors(prev => [...prev, newMeteor]);
            }

            setScore(prev => prev + 1);
        }, 50);

        const timerInterval = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    setGameActive(false);
                    setGameOver(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => {
            clearInterval(gameInterval);
            clearInterval(timerInterval);
        };
    }, [gameActive, playerX]);

    return (
        <div 
            className="game-container" 
            style={{ backgroundImage: `url(${BgGame})` }}
            onMouseMove={handleMouseMove}
        >
            <div className="game-header">
                <div className="game-score">Skor: {score}</div>
                <div className="game-timer">Waktu: {timeLeft}s</div>
            </div>

            <div ref={gameAreaRef} className="game-area">
                <div className="game-lanes">
                    <div className="lane"></div>
                    <div className="lane"></div>
                    <div className="lane"></div>
                </div>

                <motion.div
                    className="player"
                    animate={{ x: `${(playerX * 33.33) + 16.66}%` }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <img src={Asto} alt="Astronot" />
                </motion.div>

                {meteors.map(meteor => (
                    <div
                        key={meteor.id}
                        className="meteor"
                        style={{
                            left: `${(meteor.lane * 33.33) + 16.66}%`,
                            top: meteor.posY + 'px' // Gunakan pixel untuk posisi Y
                        }}
                    >
                        <img src={Meteor} alt="Meteor" />
                    </div>
                ))}
            </div>

            {showTutorial && (
                <div className="game-tutorial">
                    <h3>Hindari Meteor!</h3>
                    <p>Gerakkan mouse ke kiri dan kanan untuk berpindah jalur</p>
                    <button onClick={startGame}>Mulai Game</button>
                </div>
            )}

            {gameOver && (
                <div className="game-over">
                    <img 
                        src={timeLeft === 0 ? Success : Kalah} 
                        alt="Game Over" 
                        className="game-over-image"
                    />
                    <h3>{timeLeft === 0 ? 'Selamat!' : 'Game Over!'}</h3>
                    <p>Skor Anda: {score}</p>
                    <button onClick={() => setShowTutorial(true)}>Main Lagi</button>
                </div>
            )}
        </div>
    );
};

export default HindariMeteor; 