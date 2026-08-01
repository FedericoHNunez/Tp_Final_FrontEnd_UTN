import React from "react";
import { meData } from "../../../Data/meData";
import { Link } from "react-router";
import "./SectionMe.css";

export const SectionMe = () => {
  return (
    <>
      <div className="section-header">
        <div className="profile-header-content">
          <Link
            to="/"
            className="profile-back-link center"
            title="Volver a chats"
          >
            <svg viewBox="0 0 24 24" height="24" width="24" fill="currentColor">
              <title>Volver</title>
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
            </svg>
          </Link>
          <h1>Perfil</h1>
        </div>
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
