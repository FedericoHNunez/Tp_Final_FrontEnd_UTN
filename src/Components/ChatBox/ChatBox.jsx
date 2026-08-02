import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import "./ChatBox.css";

/**
 * Componente ChatBox
 * Representa una tarjeta de vista previa de un chat individual en la lista de chats.
 * 
 * Props:
 * - imgSrc: URL de la imagen del avatar del contacto.
 * - title: Nombre o título del contacto/chat.
 * - previewText: Último mensaje recibido o enviado para mostrar como vista previa.
 * - time: Hora del último mensaje.
 * - imgLink: Enlace opcional para ver el estado/avatar en grande.
 * - infoLink: Ruta del chat activo (ej. /chats/1).
 * - unreadCount: Cantidad de mensajes no leídos.
 * - onClick: Callback ejecutado al hacer clic en el contenedor.
 */
export const ChatBox = ({
  imgSrc,
  title,
  previewText,
  time,
  imgLink,
  infoLink,
  unreadCount,
  onClick,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Determina si este chat está seleccionado actualmente comparando la ruta activa
  const isSelected = infoLink && location.pathname === infoLink;

  // Maneja el clic en el contenedor para navegar al chat e invocar el callback onClick
  const handleContainerClick = () => {
    if (onClick) {
      onClick();
    }
    if (infoLink) {
      navigate(infoLink);
    }
  };

  // Habilita la accesibilidad mediante teclado (Enter o Espacio) para navegar al chat
  const handleKeyDown = (e) => {
    if (infoLink && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      if (onClick) {
        onClick();
      }
      navigate(infoLink);
    }
  };

  return (
    <article
      className={`chatbox-container ${isSelected ? "active" : ""} ${infoLink ? "interactive" : ""} ${unreadCount > 0 ? "unread" : ""}`}
      onClick={handleContainerClick}
      onKeyDown={handleKeyDown}
      role={infoLink ? "link" : undefined}
      tabIndex={infoLink ? 0 : undefined}
      aria-label={infoLink ? `Chat con ${title}. ${previewText}` : undefined}
    >
      {/* Si hay un enlace para la imagen/avatar, se renderiza con un Link interactivo de React Router */}
      {imgLink ? (
        <Link
          to={imgLink}
          onClick={(e) => e.stopPropagation()} // Evita activar el click del contenedor padre
          title={`Ver estado de ${title}`}
        >
          <img
            src={imgSrc || "/img/avatarDefault.webp"}
            alt={title}
            className="chatbox-avatar"
          />
        </Link>
      ) : (
        <img
          src={imgSrc || "/img/avatarDefault.webp"}
          alt={title}
          className="chatbox-avatar"
        />
      )}

      {/* Detalles del chat: nombre, hora y vista previa del último mensaje */}
      <div className="chatbox-details">
        <div className="chatbox-header">
          <h3>{title}</h3>
          {time && <span className="chatbox-time">{time}</span>}
        </div>
        <p>{previewText}</p>
      </div>
    </article>
  );
};
