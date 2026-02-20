import React, { useState, useEffect } from 'react';
import './GoUpButton.css';

const GoUpButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`go-up-btn-combined ${isVisible ? 'visible' : 'hidden'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Scroll to top"
        >
            {/* Main arrow/icon */}
            <div className="btn-icon">
                <svg className="arrow-icon" viewBox="0 0 24 24" fill="none">
                    <path 
                        d="M12 19V5M12 5L5 12M12 5L19 12" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            {/* Tooltip that appears on hover */}
            {isHovered && (
                <div className="floating-tooltip">
                    Back to top
                    <div className="tooltip-arrow"></div>
                </div>
            )}

            {/* Optional: Progress ring (can be enabled/disabled) */}
            <div className="progress-indicator"></div>
        </button>
    );
};

export default GoUpButton;