import React from "react";
import { ChatBox } from "../../ChatBox/ChatBox";

export const SectionStates = () => {
  return (
    <>
      <header className="section-header">
        <h1>Estados</h1>
      </header>

      <div className="section-states-container">
        <section className="padding ">
          <ChatBox
            imgSrc="/img/avatarDefault.webp"
            imgAlt="Mi estado"
            title="Mi estado"
            previewText="Toca para agregar actualizaciones de estado"
          />
        </section>

        <section>
          <h2 className="padding">Recientes</h2>
          <div className="padding center">
            <p>Sin estados para visualizar</p>
          </div>
        </section>
      </div>
    </>
  );
};
