// src/components/Navbar/LanguageToggle.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext'; // ✅ CORRECT IMPORT

const LanguageToggle = () => {
    const { language, changeLanguage } = useLanguage(); // ✅ Now it exists!
    
    return (
        <div className="language-toggle">
            <button
                onClick={() => changeLanguage('en')}
                className={`btn ${language === 'en' ? 'btn-primary' : 'btn-outline-primary'}`}
                aria-label="Switch to English"
            >
                EN
            </button>
            <button
                onClick={() => changeLanguage('ar')}
                className={`btn ${language === 'ar' ? 'btn-primary' : 'btn-outline-primary'}`}
                aria-label="Switch to Arabic"
            >
                AR
            </button>
        </div>
    );
};

export default LanguageToggle;