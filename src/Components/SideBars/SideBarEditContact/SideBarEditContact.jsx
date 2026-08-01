import React, { useContext } from "react";
import { useNavigate, Link } from "react-router";
import { ContactContext } from "../../../Context/ContactContext";
import { ContactForm } from "../../ContactForm/ContactForm";
import "./SideBarEditContact.css";

export const SideBarEditContact = () => {
  const { contact_selected, updateContactById } = useContext(ContactContext);
  const navigate = useNavigate();

  if (!contact_selected) return null;

  const handleFormSubmit = ({ nombre, apellido, telefono }) => {
    updateContactById(contact_selected.id, {
      first: nombre,
      last: apellido,
      cell: telefono,
    });
    navigate(`/chats/contacts/${contact_selected.id}`);
  };

  const handleCancel = () => {
    navigate(`/chats/contacts/${contact_selected.id}`);
  };

  const initialValues = {
    nombre: contact_selected.name.first || "",
    apellido: contact_selected.name.last || "",
    telefono: contact_selected.cell || "",
  };

  return (
    <aside className="asideView">
      <section className="editContact" onClick={(e) => e.stopPropagation()}>
        <header className="section-header edit-contact">
          <div className="contactInfoHeader-left-container">
            <h3>Editar Contacto</h3>
          </div>
          <Link
            to={`/chats/contacts/${contact_selected.id}`}
            title="Cerrar"
            className="close-btn center"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 5L19 19M5 19L19 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </header>
        <section className="editContact-content">
          <div className="editContact-avatar">
            <img
              src={contact_selected.picture?.large || "/img/avatarDefault.webp"}
              alt={`${contact_selected.name.first} ${contact_selected.name.last}`}
              onError={(e) => {
                e.target.src = "/img/avatarDefault.webp";
              }}
            />
          </div>
          <h2>{`${contact_selected.name.first} ${contact_selected.name.last}`}</h2>
          <p className="subtitle">
            Realiza los cambios necesarios para actualizar la información de tu
            contacto.
          </p>

          <ContactForm
            initialValues={initialValues}
            onSubmit={handleFormSubmit}
            onCancel={handleCancel}
            submitButtonText="Guardar"
            cancelButtonText="Cancelar"
          />
        </section>
      </section>
    </aside>
  );
};
