
import React from 'react';
import './Modal.css';

export const Modal = ({ isOpen, onClose, title, message, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">{title}</h2>
        <p className="modal-message">{message}</p>
        <div className="modal-actions">
          {onCancel && (
            <button className="modal-button modal-button-cancel" onClick={onCancel}>
              Cancelar
            </button>
          )}
          {onConfirm && (
            <button className="modal-button modal-button-confirm" onClick={onConfirm}>
              Confirmar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
