import React from "react";

export const SectionStates = () => {
    return (
        <>
            <header>
                <h1>Estados</h1>
            </header>
            <section>
                <button>

                    <span>
                        <img src="/img/avatarDefault.webp" alt="Mi estado" />
                    </span>
                    <h2>
                        Mi estado
                    </h2>
                    <p>
                        Toca para agregar actualizaciones de estado
                    </p>
                </button>
            </section>
            <section>
                <h2>Recientes</h2>
                <p>Sin estados para Visualizar</p>
            </section>
        </>
    );
};
