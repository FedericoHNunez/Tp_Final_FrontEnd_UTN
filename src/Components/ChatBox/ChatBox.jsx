import React from "react";
import { Link } from "react-router";
import "./ChatBox.css";

export const ChatBox = ({
    imgSrc,
    title,
    subtitle,
    time,
    imgLink,
    infoLink,
    onClick,
    customClass = ""
}) => {
    // If it's a clickable button (like in the States screen)
    if (onClick) {
        return (
            <button 
                type="button" 
                onClick={onClick} 
                className={`chatbox-container ${customClass}`}
            >
                <img src={imgSrc || "/img/avatarDefault.webp"} alt={title} className="chatbox-avatar" />
                <div className="chatbox-details">
                    <div className="chatbox-header">
                        <h3>{title}</h3>
                    </div>
                    <p>{subtitle}</p>
                </div>
            </button>
        );
    }

    // Normal item layout with links (like in Chats Preview screen)
    return (
        <article className={`chatbox-container ${customClass}`}>
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
                <p>{subtitle}</p>
            </Link>
        </article>
    );
};
