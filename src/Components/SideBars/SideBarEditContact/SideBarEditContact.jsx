import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { ContactContext } from "../../../Context/ContactContext";
import { ContactForm } from "../../ContactForm/ContactForm";
import "./SideBarEditContact.css";

export const SideBarEditContact = () => {

    const { contact_selected: contact, updateContactById } = useContext(ContactContext);
    const navigate = useNavigate();

    if (!contact) return null;

    const handleFormSubmit = ({ nombre, apellido, telefono }) => {
        updateContactById(contact.id, {
            first: nombre,
            last: apellido,
            cell: telefono
        });
        navigate(`/chats/contacts/${contact.id}`);
    };

    const handleCancel = () => {
        navigate(`/chats/contacts/${contact.id}`);
    };

    const initialValues = {
        nombre: contact.name.first || "",
        apellido: contact.name.last || "",
        telefono: contact.cell || ""
    };

    return (
        <aside className="asideView">
            <section className="ModalEditContact" onClick={(e) => e.stopPropagation()}>
                <header className="ModalEditContact-header">
                    <div className="contactInfoHeader-left-container">
                        <button onClick={() => navigate(`/chats/contacts/${contact.id}`)} title="Volver" className="contactInfoHeader-back-btn">
                            <span aria-hidden="true">
                                <svg viewBox="0 0 24 24" height="20" width="20" preserveAspectRatio="xMidYMid meet" fill="currentColor">
                                    <title>Volver atras</title>
                                    <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                                </svg>
                            </span>
                        </button>
                        <span>Editar Contacto</span>
                    </div>
                    <button onClick={() => navigate(`/chats/contacts/${contact.id}`)} title="Cerrar" className="close-btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 5L19 19M5 19L19 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </header>
                <section className="ModalEditContact-content">
                    <div className="ModalEditContact-avatar">
                        <img
                            src={contact.picture?.large || "/img/avatarDefault.webp"}
                            alt={`${contact.name.first} ${contact.name.last}`}
                            onError={(e) => { e.target.src = "/img/avatarDefault.webp"; }}
                        />
                    </div>
                    <h2>{`${contact.name.first} ${contact.name.last}`}</h2>
                    <p className="subtitle">Realiza los cambios necesarios para actualizar la información de tu contacto.</p>

                    <ContactForm
                        initialValues={initialValues}
                        onSubmit={handleFormSubmit}
                        onCancel={handleCancel}
                        submitButtonText="Guardar Cambios"
                        cancelButtonText="Cancelar"
                    />
                </section>
            </section>
        </aside>
    );
};

