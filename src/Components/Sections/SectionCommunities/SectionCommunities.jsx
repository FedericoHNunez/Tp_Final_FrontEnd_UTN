import React from "react";
import communities from "../../../assets/img/communities.jpeg"
export const SectionCommunities = () => {
    return (
        <>
            <header className="section-header">
                <h1>Comunidades</h1>
            </header>
            <section className=" padding" >
                <div>

                    <img className="sideBarHome-img" src={communities} alt="imagen comunidades" />
                </div>
                <h2>Crea una comunidad para mantenerte en contacto </h2>
                <p>
                    Las comunidades reúnen a los miembros en grupos por temas y facilitan la recepción de avisos de los administradores. Cualquier comunidad a la que te añadan aparecerá aquí.
                </p>
            </section>
        </>
    );
};
