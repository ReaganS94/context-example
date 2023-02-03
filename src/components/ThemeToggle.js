import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function ThemeToggle() {
    const { toggleTheme, isLightTheme } = useContext(ThemeContext);
    return(
        <span onClick={toggleTheme} style={{cursor: "pointer", float: 'right'}}>{isLightTheme ? "Dark Mode 🌚" : "Light Mode 🌝"}</span>
    )
}