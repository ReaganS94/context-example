import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

export default function BookList() {

    const theme = useContext(ThemeContext);
    const auth = useContext(AuthContext);

    const { isLightTheme, light, dark } = theme;
    const themeStyles = isLightTheme ? light : dark;

    const { isAuthenticated, toggleAuth } = auth;
    
    return (
        <div className="book-list" style={{ color: themeStyles.text, background: themeStyles.bg}}>
{        isAuthenticated ?
            <ul>
                <li style={{ background: themeStyles.ui }}>The name of the wind</li>
                <li style={{ background: themeStyles.ui }}>The way of kings</li>
                <li style={{ background: themeStyles.ui }}>The final empire</li>
            </ul> : "Please log in to view the content"}
        </div> 
    )
}