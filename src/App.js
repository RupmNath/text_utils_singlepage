import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  // Theme state
  const [themeMode, setThemeMode] = useState("light"); // by default dark mode is not enable
  const [textColor, setTextColor] = useState("dark"); // to change text color while switching theme
  const [formBackground, setFormBackground] = useState("light"); // for form background

  // Message state
  const [alert, setAlert] = useState(null);

  // Theme toggle function
  const toggleTheme = () => {
    if (themeMode === "light") {
      setThemeMode("dark");
      setTextColor("light"); // Change text color to light when switching to dark theme
      setFormBackground("dark"); // change form background
      showAlert("Dark mode enabled", "success"); // alert message and type
      document.body.style.backgroundColor = "black";
    } else {
      setThemeMode("light");
      setTextColor("dark"); // Change text color to dark when switching to light theme
      setFormBackground("light");
      showAlert("Light mode enabled", "success"); // alert message and type
      document.body.style.backgroundColor = "white";
    }
  };

  // Alert function to show message
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <>
      {/* passing props on parameters */}
      <Navbar
        title="TextUtils"
        aboutText="About Us"
        themeMode={themeMode}
        textColor={textColor}
        toggleTheme={toggleTheme}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          textColor={textColor}
          formBackground={formBackground}
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;
