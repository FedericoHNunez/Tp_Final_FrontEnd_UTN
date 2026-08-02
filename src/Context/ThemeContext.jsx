import React, { createContext, useState, useEffect } from "react";
import { Outlet } from "react-router";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const themes = [
    { id: "light", name: "Clásico", previewColor: "#1dab62" },
    { id: "violet", name: "Violeta", previewColor: "#7c3aed" },
    { id: "blue", name: "Celeste", previewColor: "#0284c7" },
  ];

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  const provider_values = {
    themes,
    theme,
    changeTheme,
  };

  return (
    <ThemeContext.Provider value={provider_values}>
      {children || <Outlet />}
    </ThemeContext.Provider>
  );
};
