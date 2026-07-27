import React from "react";
import { meData } from "../../../Data/meData";

export const SectionMe = () => {
    return (
        <>
            <header>
                <h1>
                    {meData.name.first}
                </h1>
            </header>
            <section>
                <span>
                    <img src={meData.picture.medium} alt="" />
                </span>
                <p>
                    {meData.cell}
                </p>
                <button type="button" title="Cerrar Sesion" aria-label="Cerrar Sesion">
                    Cerrar Sesion
                </button>
            </section>
        </>
    );
};
