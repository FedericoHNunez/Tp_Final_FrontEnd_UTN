import React, { createContext, useState, useEffect } from "react";
import { Outlet } from "react-router";

// Creación del contexto del Tema visual
export const ThemeContext = createContext();

/**
 * Proveedor de Contexto: ThemeContextProvider
 * Administra el tema visual de la aplicación (clásico/verde, violeta, celeste)
 * y actualiza el atributo 'data-theme' en el elemento body para aplicar estilos globales de CSS.
 */
export const ThemeContextProvider = ({ children }) => {
  // Estado local que almacena la clave del tema seleccionado (por defecto "light")
  const [theme, setTheme] = useState("light");

  // Lista de temas disponibles con sus nombres legibles y colores representativos
  const themes = [
    { id: "light", name: "Clásico", previewColor: "#1dab62" },
    { id: "violet", name: "Violeta", previewColor: "#7c3aed" },
    { id: "blue", name: "Celeste", previewColor: "#0284c7" },
  ];

  // Efecto que se ejecuta cada vez que cambia el tema para asignarlo en el body del documento
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  // Función expuesta para actualizar el tema activo
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  // Valores distribuidos a través del proveedor del contexto
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
