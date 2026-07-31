import React from "react";
import { Link } from "react-router";
import "./ModalMoreOption.css";

export const ModalMoreOption = ({ isOpen, onClose, arrayOptions }) => {
    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop click handler to close the dropdown */}
            <div className="ModalMoreOption-backdrop" onClick={onClose}></div>

            {/* Dropdown Container */}
            <div className="ModalMoreOption-container">
                <ul className="ModalMoreOption-list">
                    {arrayOptions?.map((opcion, index) => {
                        const path = opcion.route || opcion.ruta || "#";
                        const label = opcion.text || opcion.nombre || "";
                        
                        return (
                            <li key={opcion.id || index} className="ModalMoreOption-item">
                                <Link 
                                    to={path} 
                                    className="ModalMoreOption-link" 
                                    onClick={onClose}
                                >
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};
