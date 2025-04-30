import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSettings } from 'react-icons/fi';

const SettingsOverlay = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);

    const themes = ['light', 'dark', 'skyblue'];

    return (
        <div className="settings-overlay">
            {/* Toggle button */}
            <button
                className="settings-toggle"
                onClick={() => setIsOpen(prev => !prev)}
                aria-label="Toggle Settings"
            >
                <FiSettings />
            </button>

            {/* Animated Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="theme-panel"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h4>Choose Theme</h4>
                        <ul>
                            {themes.map((t) => (
                                <li key={t}>
                                    <button
                                        className={`theme-button ${theme === t ? 'active' : ''}`}
                                        onClick={() => toggleTheme(t)}
                                    >
                                        {t.charAt(0).toUpperCase() + t.slice(1)}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SettingsOverlay;
