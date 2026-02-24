import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = [
    { name: 'Monochrome', value: 'white', label: 'Default' },
    { name: 'Neon Green', value: '#39ff14', label: 'Cyber' },
    { name: 'Electric Blue', value: '#00ffff', label: 'Future' },
    { name: 'Hot Pink', value: '#ff00ff', label: 'Vapor' },
    { name: 'Sunset Orange', value: '#ff4500', label: 'Solar' },
];

export function ThemeProvider({ children }) {
    const [accentColor, setAccentColor] = useState('white');

    useEffect(() => {
        document.documentElement.style.setProperty('--accent-color', accentColor);
    }, [accentColor]);

    return (
        <ThemeContext.Provider value={{ accentColor, setAccentColor, themes }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
