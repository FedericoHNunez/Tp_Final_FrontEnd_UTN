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
                    type="tel"
                    name="telefono"
                    id="telefono"
                    placeholder="Teléfono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                />
            </div>

            <div className="button-group">
                <button type="submit" className="save-btn">{submitButtonText}</button>
                {onCancel && (
                    <button type="button" className="cancel-btn" onClick={onCancel}>
                        {cancelButtonText}
                    </button>
                )}
            </div>
        </form>
    );
};
