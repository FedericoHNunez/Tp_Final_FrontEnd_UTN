import "./SideBarnewContact.css";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { ContactContext } from "../../../Context/ContactContext";
import { ContactForm } from "../../ContactForm/ContactForm";

export const SideBarNewContact = () => {
    const { createContact } = useContext(ContactContext);
    const navigate = useNavigate();

    const handleFormSubmit = ({ nombre, apellido, telefono }) => {
        createContact(nombre, apellido, telefono);
        navigate("/chats");
    };

    return (
        <aside className="asideView">
            <section className="ModalNewContact" onClick={(e) => e.stopPropagation()}>
                <header className="ModalNewContact-header">
                    <div className="contactInfoHeader-left-container">
                        <button onClick={() => navigate("/chats")} title="Volver" className="contactInfoHeader-back-btn">
                            <span aria-hidden="true" className="x1qx5ct2 xw4jnvo">
                                <svg viewBox="0 0 24 24" height="20" width="20" preserveAspectRatio="xMidYMid meet" fill="currentColor">
                                    <title>Volver atras</title>
                                    <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                                </svg>
                            </span>
                        </button>
                        <span>Nuevo Contacto</span>
                    </div>
                    <button onClick={() => navigate("/chats")} title="Cerrar">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 5L19 19M5 19L19 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </header>
                <section className="ModalNewContact-content">
                    <h2>Crear nuevo contacto</h2>
                    <p>Puedes agregar un contacto ingresando su nombre, apellido y número de teléfono.</p>
                    <ContactForm 
                        onSubmit={handleFormSubmit} 
                        submitButtonText="Agregar"
                    />
                </section>
            </section>
        </aside>
    );
}