import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const theme = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const themeStyles = isLightTheme ? light : dark;

  console.log(themeStyles);

  //   return (
  //     <nav style={{ background: themeStyles.ui, color: themeStyles.text }}>
  //       <h1>Context App</h1>
  //       <ul>
  //         <li>Home</li>
  //         <li>About</li>
  //         <li>Contact</li>
  //       </ul>
  //     </nav>
  //   );
  // }
  // ------------OR----------------

  return (
    <AuthContext.Consumer>
      {(authContext) => (
        <ThemeContext.Consumer>
          {(themeContext) => {
            const { isLightTheme, light, dark } = themeContext;
            const { isAuthenticated, toggleAuth } = authContext;

            const theme = isLightTheme ? light : dark;
            const auth = isAuthenticated ? "Log out" : "Log in";

            return (
              <nav style={{ background: theme.ui, color: theme.text }}>
                <span
                  style={{ cursor: "pointer", float: "left" }}
                  onClick={toggleAuth}
                >
                  {auth}
                </span>

                <ThemeToggle />
                <h1>Context App</h1>

                <br />

                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </nav>
            );
          }}
        </ThemeContext.Consumer>
      )}
    </AuthContext.Consumer>
  );
}

// Both methods work the same way.
