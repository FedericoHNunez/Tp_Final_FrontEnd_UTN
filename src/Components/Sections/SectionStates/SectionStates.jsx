import React from "react";
import { ChatBox } from "../../ChatBox/ChatBox";
import "./SectionStates.css";

export const SectionStates = () => {
    const handleStatusClick = () => {
        console.log("Crear actualización de estado");
    };

    return (
        <div className="section-states-container">
            <header className="states-header">
                <h1>Estados</h1>
            </header>
            
            <section className="states-my-status">
                <ChatBox
                    imgSrc="/img/avatarDefault.webp"
                    imgAlt="Mi estado"
                    title="Mi estado"
                    subtitle="Toca para agregar actualizaciones de estado"
                    onClick={handleStatusClick}
                />
            </section>
            
            <section className="states-recientes">
                <h2 className="states-section-title">Recientes</h2>
                <div className="no-states-container">
                    <p>Sin estados para visualizar</p>
                </div>
            </section>
        </div>
    );
};

