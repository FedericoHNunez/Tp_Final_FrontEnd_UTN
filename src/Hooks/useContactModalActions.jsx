import { useContext } from "react";
import { useNavigate } from "react-router";
import { ContactContext } from "../Context/ContactContext";
import { useModal } from "./useModals";

/**
 * Hook Personalizado: useContactModalActions
 * Centraliza la lógica y las acciones de confirmación (mediante ventanas modales)
 * para vaciar chats, eliminar chats o eliminar contactos de la aplicación.
 * 
 * Retorna:
 * - contact_selected: El objeto del contacto seleccionado actualmente.
 * - isOpen: Determina si el modal está abierto.
 * - modalContent: Textos y callbacks del modal activo.
 * - closeModal: Función para cerrar y limpiar el modal.
 * - handleVaciarChat: Abre el modal para confirmar el vaciado de los mensajes del chat activo.
 * - handleEliminarChat: Abre el modal para confirmar la eliminación completa del chat activo.
 * - handleEliminarContacto: Abre el modal para confirmar la eliminación permanente del contacto.
 */
export const useContactModalActions = () => {
  // Accede a las funciones del contexto global de contactos
  const { contact_selected, deleteAllMessages, deleteChat, deleteContactById } =
    useContext(ContactContext);

  // Inicializa el hook base de modales
  const { isOpen, modalContent, openModal, closeModal } = useModal();
  const navigate = useNavigate();

  // Configura y abre el modal para vaciar los mensajes del chat actual
  const handleVaciarChat = () => {
    openModal({
      title: "Vaciar chat",
      message: `¿Estás seguro de que quieres vaciar el chat con ${contact_selected.name.first}?`,
      onConfirm: () => {
        deleteAllMessages();
        closeModal();
      },
      onCancel: closeModal,
    });
  };

  // Configura y abre el modal para eliminar la conversación y redirigir a la lista de chats
  const handleEliminarChat = () => {
    openModal({
      title: "Eliminar chat",
      message: `¿Estás seguro de que quieres eliminar el chat con ${contact_selected.name.first}?`,
      onConfirm: () => {
        deleteChat(contact_selected.id);
        closeModal();
        navigate("/chats");
      },
      onCancel: closeModal,
    });
  };

  // Configura y abre el modal para borrar al contacto de forma permanente del listado y redirigir a chats
  const handleEliminarContacto = () => {
    openModal({
      title: "Eliminar contacto",
      message: `¿Estás seguro de que quieres eliminar a ${contact_selected.name.first} ${contact_selected.name.last}?`,
      onConfirm: () => {
        deleteContactById(contact_selected.id);
        closeModal();
        navigate("/chats");
      },
      onCancel: closeModal,
    });
  };

  return {
    contact_selected,
    isOpen,
    modalContent,
    closeModal,
    handleVaciarChat,
    handleEliminarChat,
    handleEliminarContacto,
  };
};
