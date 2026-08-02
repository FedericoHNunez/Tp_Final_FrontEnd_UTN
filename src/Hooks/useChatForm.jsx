import { useState, useContext } from "react";
import { ContactContext } from "../Context/ContactContext";

/**
 * Hook Personalizado: useChatForm
 * Centraliza la lógica y el estado del formulario de envío de mensajes en un chat.
 * 
 * Retorna:
 * - setMessageValue: Función para sobrescribir directamente el valor actual.
 * - messageValue: El texto actual escrito en la entrada de chat.
 * - handleInputChange: Maneja la actualización del valor del input.
 * - handleSubmit: Procesa el envío del mensaje (creación de mensaje y limpieza del input).
 * - handleKeyDown: Permite enviar al presionar 'Enter' (sin shift).
 */
export const useChatForm = () => {
  // Extrae la acción para crear mensajes desde el contexto global de contactos
  const { createMessage } = useContext(ContactContext);

  // Estado local para el valor del mensaje que está escribiendo el usuario
  const [messageValue, setMessageValue] = useState("");

  // Actualiza el estado local cada vez que el usuario escribe en el área de texto
  const handleInputChange = (event) => {
    setMessageValue(event.target.value);
  };

  // Envía el mensaje si no está vacío y limpia el campo
  const handleSubmit = (event) => {
    event.preventDefault();
    if (messageValue.trim() === "") return;
    createMessage(messageValue, "me");
    setMessageValue("");
  };

  // Permite enviar el formulario pulsando Enter directamente (a menos que se pulse Shift+Enter para un salto de línea)
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  return {
    setMessageValue,
    messageValue,
    handleInputChange,
    handleSubmit,
    handleKeyDown,
  };
};
