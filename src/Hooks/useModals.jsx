import { useState } from "react";

/**
 * Hook Personalizado: useModal
 * Administra el estado de apertura/cierre y el contenido dinámico de una ventana modal modal configurable.
 * 
 * Retorna:
 * - isOpen: Booleano que indica si el modal está visible.
 * - modalContent: Objeto con la información (título, mensaje, confirmación/cancelación) a mostrar.
 * - openModal: Abre el modal y establece su contenido.
 * - closeModal: Cierra el modal y restablece su contenido a los valores iniciales.
 */
export const useModal = () => {
  // Estado local para determinar si el modal está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);
  
  // Estado local que almacena los textos y callbacks de acción para el modal activo
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    onConfirm: null,
    onCancel: null,
  });

  // Abre el modal configurándolo con el contenido y callbacks recibidos
  const openModal = (content) => {
    setModalContent(content);
    setIsOpen(true);
  };

  // Cierra el modal y limpia su contenido para evitar fugas de memoria o clicks accidentales
  const closeModal = () => {
    setIsOpen(false);
    setModalContent({
      title: "",
      message: "",
      onConfirm: null,
      onCancel: null,
    });
  };

  return {
    isOpen,
    modalContent,
    openModal,
    closeModal,
  };
};
