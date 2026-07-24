import { useState, useRef, useEffect, useContext } from "react";
import { ContactContext } from "../Context/ContactContext";

export const useChatForm = () => {
    const { contact_selected, createMessage } = useContext(ContactContext);
    const textareaRef = useRef(null);
    const [messageValue, setMessageValue] = useState("");

    // Reset textarea height when contact selection changes
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "5.2rem";
            textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + "px";
        }
    }, [contact_selected?.id]);

    const handleInputChange = (e) => {
        setMessageValue(e.target.value);
        e.target.style.height = "5.2rem";
        e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
    };

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        if (messageValue.trim() === "") return;
        createMessage(messageValue, "me");
        setMessageValue("");
        if (textareaRef.current) {
            textareaRef.current.style.height = "5.2rem";
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return {
        messageValue,
        textareaRef,
        handleInputChange,
        handleSubmit,
        handleKeyDown,
    };
};
