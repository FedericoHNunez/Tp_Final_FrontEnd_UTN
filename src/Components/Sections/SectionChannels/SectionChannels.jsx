import React, { useState } from "react";
import { InputSearchContact } from "../../InputSearchContact/InputSearchContact";

/**
 * Componente SectionChannels
 * Muestra la sección de "Canales" del usuario, permitiendo buscar canales
 * y presentando una vista por defecto cuando no hay canales creados o disponibles.
 */
export const SectionChannels = () => {
  // Estado local para almacenar el valor de búsqueda ingresado por el usuario
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      {/* Encabezado de la sección de Canales */}
      <header className="section-header">
        <h1>Canales</h1>
      </header>

      {/* Barra de búsqueda para filtrar la lista de canales */}
      <section>
        <InputSearchContact
          searchChatsValue={searchValue}
          setSearchChatsValue={setSearchValue}
          placeholder="Buscar Canales"
        />
      </section>
      
      {/* Estado vacío por defecto indicando que no hay canales */}
      <section className="section-width center padding">
        <p>Sin Canales para Visualizar</p>
      </section>
    </>
  );
};
