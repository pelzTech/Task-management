import React, { useState, useEffect } from "react";
import { Switch } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import "./Settings.css";

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
  });

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "true") {
      setSettings((prevState) => ({ ...prevState, darkMode: true }));
      document.body.classList.add("dark");
    } else {
      setSettings((prevState) => ({ ...prevState, darkMode: false }));
      document.body.classList.remove("dark");
    }
  }, []);

  const handleToggle = (key) => {
    setSettings((prevState) => {
      const newSettings = { ...prevState, [key]: !prevState[key] };
      if (key === "darkMode") {
        localStorage.setItem("darkMode", newSettings.darkMode);
        if (newSettings.darkMode) {
          document.body.classList.add("dark");
        } else {
          document.body.classList.remove("dark");
        }
      }
      return newSettings;
    });
  };

  return (
    <div className="settings-container">
      <h2 className="settings-header">Settings</h2>

      <div className="setting-item">
        <span>Enable Notifications</span>
        <label className="toggle-container">
          <input
            type="checkbox"
            checked={settings.notifications}
            onChange={() => handleToggle("notifications")}
          />
          <span className="toggle-slider"></span>
        </label>
      </div>

      <div className="setting-item">
        <span>Enable Dark Mode</span>
        <label className="toggle-container">
          <input
            type="checkbox"
            checked={settings.darkMode}
            onChange={() => handleToggle("darkMode")}
          />
          <span className="toggle-slider"></span>
        </label>
        <span className="icon">
          {settings.darkMode ? <Brightness4 /> : <Brightness7 />}
        </span>
      </div>

      <div className="setting-item" style={{ justifyContent: "center" }}>
        <button className="save-button">Save Changes</button>
      </div>
    </div>
  );
};

export default Settings;
