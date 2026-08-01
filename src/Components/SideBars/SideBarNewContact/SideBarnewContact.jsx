import { useContext } from "react";
import { useNavigate } from "react-router";
import { ContactContext } from "../../../Context/ContactContext";
import "./SideBarnewContact.css";
import { Link } from "react-router";
import { ContactForm } from "../../ContactForm/ContactForm";
export const SideBarNewContact = () => {
  const { createContact } = useContext(ContactContext);
  const navigate = useNavigate();

  const handleFormSubmit = ({ nombre, apellido, telefono }) => {
    createContact(nombre, apellido, telefono);
    navigate("/chats");
  };

  const handleCancel = () => {
    navigate("/chats");
  };

  return (
    <>
      <aside className="asideView center new-contact">
        <div className="contact-form-header section-header">
          <h3>Crear nuevo contacto</h3>

          <Link to="/chats" title="Cerrar" className="center">
            <svg
              title="Cerrar"
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
        </div>
        <section className="contact-form-container center">
          <div className="contact-form-content">
            <div className="contact-form-header">
              <h2>Nuevo contacto</h2>
              <p>
                Puedes agregar un contacto ingresando su nombre, apellido y
                número de teléfono.
              </p>
            </div>
            <ContactForm
              initialValues={{ nombre: "", apellido: "", telefono: "" }}
              onSubmit={handleFormSubmit}
              onCancel={handleCancel}
              submitButtonText="Guardar"
              cancelButtonText="Cancelar"
            />
          </div>
        </section>
      </aside>
    </>
  );
};
