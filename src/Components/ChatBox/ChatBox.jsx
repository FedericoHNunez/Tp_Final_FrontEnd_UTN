import React from "react";
import { Link, useLocation } from "react-router";
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
    const isSelected = infoLink && location.pathname === infoLink

    return (
        <article className={`chatbox-container ${isSelected ? "active" : ""}`}>
            {imgLink ? (
                <Link to={imgLink}>
                    <img src={imgSrc || "/img/avatarDefault.webp"} alt={title} className="chatbox-avatar" />
                </Link>
            ) : (
                <img src={imgSrc || "/img/avatarDefault.webp"} alt={title} className="chatbox-avatar" />
            )}

            <Link to={infoLink} className="chatbox-details">
                <div className="chatbox-header">
                    <h3>{title}</h3>
                    {time && <span className="chatbox-time">{time}</span>}
                </div>
                <p>{previewText}</p>
            </Link>
        </article>
    );
};
