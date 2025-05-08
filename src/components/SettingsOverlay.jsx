import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import '../styles/_settingsOverlay.scss'; // optional custom styling

const SettingsOverlay = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const isDark = theme === 'dark';

    return (
        <button
            className="theme-toggle-btn"
            onClick={() => toggleTheme(isDark ? 'light' : 'dark')}
            aria-label="Toggle Theme"
        >
            {isDark ? <FiSun /> : <FiMoon />}
        </button>
    );
};

export default SettingsOverlay;
