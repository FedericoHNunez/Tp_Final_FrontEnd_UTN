import React from "react";
import "./ModalNewConctact.css";

export const ModalNewContact = () => {
    return (
        <section className="ModalNewContact">
            <header className="ModalNewContact-header">
                <span>Nuevo Contacto</span>
                <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 5L19 19M5 19L19 5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </header>
            <section >
                <h2>Crear nuevo contacto</h2>
                <p>Puedes agregar un contacto ingresando su número de teléfono o escaneando su código QR.</p>
                <form action="">
                    <input type="text" name="nombre" id="nombre" placeholder="Nombre" />
                    <input type="text" name="apellido" id="apellido" placeholder="Apellido" />
                    <input type="text" name="telefono" id="telefono" placeholder="Teléfono" />
                    <button type="submit">Agregar</button>
                </form>

            </section>
        </section>
    );
};