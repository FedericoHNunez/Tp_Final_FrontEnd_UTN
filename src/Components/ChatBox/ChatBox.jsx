import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import "./ChatBox.css";

export const ChatBox = ({
  imgSrc,
  title,
  previewText,
  time,
  imgLink,
  infoLink,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isSelected = infoLink && location.pathname === infoLink;

  const handleContainerClick = () => {
    if (infoLink) {
      navigate(infoLink);
    }
  };

  const handleKeyDown = (e) => {
    if (infoLink && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      navigate(infoLink);
    }
  };

  return (
    <article
      className={`chatbox-container ${isSelected ? "active" : ""} ${infoLink ? "interactive" : ""}`}
      onClick={handleContainerClick}
      onKeyDown={handleKeyDown}
      role={infoLink ? "link" : undefined}
      tabIndex={infoLink ? 0 : undefined}
      aria-label={infoLink ? `Chat con ${title}. ${previewText}` : undefined}
    >
      {imgLink ? (
        <Link
          to={imgLink}
          onClick={(e) => e.stopPropagation()}
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
