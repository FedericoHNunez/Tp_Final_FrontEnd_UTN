import { useState, useContext } from "react";
import { ContactContext } from "../Context/ContactContext";

export const useChatForm = () => {
  const { createMessage } = useContext(ContactContext);

  const [messageValue, setMessageValue] = useState("");

  // Reset textarea height when contact selection changes

  const handleInputChange = (event) => {
    setMessageValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (messageValue.trim() === "") return;
    createMessage(messageValue, "me");
    setMessageValue("");
  };
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
