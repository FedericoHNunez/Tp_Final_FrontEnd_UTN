import React from "react";
import { IoMdSearch } from "react-icons/io";
import "./InputSearchContact.css";

/**
 * Componente InputSearchContact
 * Un campo de entrada de texto reutilizable diseñado para buscar y filtrar chats o contactos.
 * 
 * Props:
 * - searchChatsValue: El valor actual del input (estado controlado).
 * - setSearchChatsValue: Función para actualizar el estado del valor de búsqueda.
 * - placeholder: Texto indicativo o sugerencia dentro del input.
 */
export const InputSearchContact = ({
  searchChatsValue,
  setSearchChatsValue,
  placeholder,
}) => {
  // Manejador de eventos que actualiza el estado de la búsqueda con el valor ingresado por el usuario
  const onChangeSearchChats = (e) => {
    setSearchChatsValue(e.target.value);
  };

  return (
    <div className="ChatsPreview-header-input-container">
      <div className="ChatsPreview-header-input">
        {/* Label invisible pero accesible para lectores de pantalla */}
        <label htmlFor="searchChats" className="label-none">
          Buscar
        </label>
        <input
          id="searchChats"
          name="searchChats"
          type="text"
          placeholder={placeholder}
          value={searchChatsValue}
          onChange={onChangeSearchChats}
        />
        {/* Icono de búsqueda visual */}
        <span className="search-icon">
          <IoMdSearch />
        </span>
      </div>
    </div>
  );
};
