import { useContext } from "react";
import { useNavigate } from "react-router";
import { ContactContext } from "../Context/ContactContext";
import { useModal } from "./useModals";

export const useContactModalActions = () => {
    const {
        contact_selected,
        deleteAllMessages,
        deleteChat,
        deleteContactById
    } = useContext(ContactContext);

    const { isOpen, modalContent, openModal, closeModal } = useModal();
    const navigate = useNavigate();

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

    const handleEliminarChat = () => {
        openModal({
            title: "Eliminar chat",
            message: `¿Estás seguro de que quieres eliminar el chat con ${contact_selected.name.first}?`,
            onConfirm: () => {
                deleteChat(contact_selected.id);
                closeModal();
                navigate('/chats');
            },
            onCancel: closeModal,
        });
    };

    const handleEliminarContacto = () => {
        openModal({
            title: "Eliminar contacto",
            message: `¿Estás seguro de que quieres eliminar a ${contact_selected.name.first} ${contact_selected.name.last}?`,
            onConfirm: () => {
                deleteContactById(contact_selected.id);
                closeModal();
                navigate('/chats');
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
        handleEliminarContacto
    };
};
