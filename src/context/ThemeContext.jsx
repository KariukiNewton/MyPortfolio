import { createContext, useState, useEffect } from 'react';

// Create the context
export const ThemeContext = createContext();

//Create the provider
export const ThemeProvider = ({ children }) => {
    // Theme state
    const [theme, setTheme] = useState('light'); // default theme

    // Load theme from localStorage if it exists (user's last choice)
    useEffect(() => {
        const storedTheme = localStorage.getItem('portfolio-theme');
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    // Save theme to localStorage every time it changes
    useEffect(() => {
        localStorage.setItem('portfolio-theme', theme);
    }, [theme]);

    // Toggle theme manually
    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`app ${theme}`}> {/* Dynamically apply theme class to app */}
                {children}
            </div>
        </ThemeContext.Provider>
    );
};
