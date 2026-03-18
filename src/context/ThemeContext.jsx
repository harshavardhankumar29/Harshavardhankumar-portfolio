import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = [
    { name: 'Monochrome', value: 'white', label: 'Default' },
    { name: 'Emerald Green', value: '#34d399', label: 'Cyber' },
    { name: 'Cyan Blue', value: '#22d3ee', label: 'Future' },
    { name: 'Fuchsia Pink', value: '#e879f9', label: 'Vapor' },
    { name: 'Amber Orange', value: '#fbbf24', label: 'Solar' },
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
