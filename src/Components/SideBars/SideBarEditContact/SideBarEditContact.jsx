import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { ContactContext } from "../../../Context/ContactContext";
import "./SideBarEditContact.css";

export const SideBarEditContact = () => {
    const { contact_id } = useParams();
    const { contacts, updateContactById } = useContext(ContactContext);
    const navigate = useNavigate();

    const contact = contacts.find(c => c.id === Number(contact_id));

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");

    useEffect(() => {
        if (contact) {
            setNombre(contact.name.first || "");
            setApellido(contact.name.last || "");
            setTelefono(contact.cell || "");
        }
    }, [contact]);

    if (!contact) {
        return (
            <aside className="asideView">
                <section className="ModalEditContact">
                    <header className="ModalEditContact-header">
                        <div className="contactInfoHeader-left-container">
                            <button onClick={() => navigate("/chats")} title="Volver" className="contactInfoHeader-back-btn">
                                <svg viewBox="0 0 24 24" height="20" width="20" fill="currentColor">
                                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                                </svg>
                            </button>
                            <span>Contacto no encontrado</span>
                        </div>
                    </header>
                    <section className="ModalEditContact-content">
                        <p>No se pudo cargar la información del contacto solicitado.</p>
                        <button onClick={() => navigate("/chats")} className="cancel-btn" style={{ marginTop: "2rem" }}>
                            Volver a Chats
                        </button>
                    </section>
                </section>
            </aside>
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre.trim() && telefono.trim()) {
            updateContactById(contact.id, {
                first: nombre.trim(),
                last: apellido.trim(),
                cell: telefono.trim()
            });
            navigate(`/chats/contacts/${contact.id}`);
        }
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
                    
                    <form className="ModalEditContact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input 
                                type="text" 
                                name="nombre" 
                                id="nombre" 
                                placeholder="Nombre" 
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required 
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="apellido">Apellido (Opcional)</label>
                            <input 
                                type="text" 
                                name="apellido" 
                                id="apellido" 
                                placeholder="Apellido" 
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)}
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="telefono">Número de Teléfono</label>
                            <input 
                                type="text" 
                                name="telefono" 
                                id="telefono" 
                                placeholder="Teléfono" 
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                                required 
                            />
                        </div>
                        
                        <div className="button-group">
                            <button type="submit" className="save-btn">Guardar Cambios</button>
                            <button type="button" className="cancel-btn" onClick={() => navigate(`/chats/contacts/${contact.id}`)}>
                                Cancelar
                            </button>
                        </div>
                    </form>
                </section>
            </section>
        </aside>
    );
};
