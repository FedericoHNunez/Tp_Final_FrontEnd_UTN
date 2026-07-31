import React, { useState, useEffect } from "react";
import "./ContactForm.css";

export const ContactForm = ({
    initialValues = { nombre: "", apellido: "", telefono: "" },
    onSubmit,
    onCancel,
    submitButtonText = "Guardar",
    cancelButtonText = "Cancelar"
}) => {
    const [nombre, setNombre] = useState(initialValues.nombre || "");
    const [apellido, setApellido] = useState(initialValues.apellido || "");
    const [telefono, setTelefono] = useState(initialValues.telefono || "");

    useEffect(() => {
        setNombre(initialValues.nombre || "");
        setApellido(initialValues.apellido || "");
        setTelefono(initialValues.telefono || "");
    }, [initialValues.nombre, initialValues.apellido, initialValues.telefono]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre.trim() && telefono.trim()) {
            onSubmit({
                nombre: nombre.trim(),
                apellido: apellido.trim(),
                telefono: telefono.trim()
            });
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <span className={nombre.trim().length > 2 ? "has-content" : ""}>
                    <svg viewBox="0 0 24 24" width="27" preserveAspectRatio="xMidYMid meet" fill="currentColor"><title>Nombre</title><path fill="currentColor" d="M12 12c-1.1 0-2.04-.4-2.82-1.18A3.85 3.85 0 0 1 8 8c0-1.1.4-2.04 1.18-2.83A3.85 3.85 0 0 1 12 4c1.1 0 2.04.4 2.82 1.17A3.85 3.85 0 0 1 16 8c0 1.1-.4 2.04-1.18 2.82A3.85 3.85 0 0 1 12 12Zm-8 6v-.8c0-.57.15-1.09.44-1.56a2.9 2.9 0 0 1 1.16-1.09 13.76 13.76 0 0 1 9.65-1.16c1.07.26 2.12.64 3.15 1.16.48.25.87.61 1.16 1.09.3.47.44 1 .44 1.56v.8c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H6c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41Zm2 0h12v-.8a.97.97 0 0 0-.5-.85c-.9-.45-1.8-.79-2.72-1.01a11.6 11.6 0 0 0-5.55 0c-.92.22-1.83.56-2.73 1.01a.97.97 0 0 0-.5.85v.8Zm6-8c.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41-.39-.4-.86-.59-1.41-.59-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41 0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59Z"></path></svg>
                </span>
                <label htmlFor="nombre" className="label-none">Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    maxLength={20}
                    className={nombre.trim().length > 2 ? "has-content" : ""}
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <span className={apellido.trim() ? "has-content" : ""}>
                </span>
                <label htmlFor="apellido" className="label-none">Apellido (Opcional)</label>
                <input
                    type="text"
                    name="apellido"
                    id="apellido"
                    className={apellido.trim() ? "has-content" : ""}
                    placeholder="Apellido (opcional)"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                />
            </div>

            <div className="form-group">
                <span className={telefono.trim().length > 8 ? "has-content" : ""}>
                    <svg viewBox="0 0 24 24" width="22" preserveAspectRatio="xMidYMid meet" fill="currentColor"><title>Numero de tel</title><path d="m19.23 15.26-2.54-.29a2 2 0 0 0-1.64.57l-1.84 1.84a15.05 15.05 0 0 1-6.59-6.59l1.85-1.85a2 2 0 0 0 .57-1.64l-.29-2.52a2 2 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07a17 17 0 0 0 15.89 15.89 1.98 1.98 0 0 0 2.07-2v-1.73a1.98 1.98 0 0 0-1.76-1.98z"></path></svg>
                </span>
                <label
                    htmlFor="telefono"
                    className="label-none">
                    Número de Teléfono
                </label>
                <input
                    type="tel"
                    name="telefono"
                    id="telefono"
                    className={telefono.trim().length > 8 ? "has-content" : ""}
                    placeholder="Teléfono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value.replace(/\D/g, ""))}
                    required
                />
            </div>

            <div className="button-group">
                <button
                    title="Guardar"
                    type="submit"
                    className={`save-btn ${nombre.trim().length < 3 || telefono.trim().length < 8 ? "disabled-btn" : ""}`}
                    disabled={nombre.trim().length < 3 || telefono.trim().length < 8}>
                    {
                        nombre.trim().length < 3 || telefono.trim().length < 8
                            ? "Datos no Válidos"
                            : submitButtonText
                    }

                </button>

                {onCancel && (
                    <button
                        title="Cancelar"
                        type="button"
                        className="cancel-btn"
                        onClick={onCancel}>
                        {cancelButtonText}
                    </button>
                )}
            </div>
        </form>
    );
};
