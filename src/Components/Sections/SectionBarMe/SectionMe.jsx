import React from "react";
import { meData } from "../../../Data/meData";
import "./SectionMe.css";

export const SectionMe = () => {
    return (
        <>
            <div className="section-header">
                <h1>Perfil</h1>
            </div>
            <section className="profile-section">
                <div className="profile-avatar-container">
                    <img src={meData.picture.large} alt={meData.alias} />
                </div>
                <div className="profile-info">
                    <h2>{meData.alias}</h2>
                    <h3>{meData.cell}</h3>
                </div>
                <button title="Cerrar Sesión" className="profile-logout-btn">
                    Cerrar Sesión
                </button>
            </section>
        </>
    );
};
