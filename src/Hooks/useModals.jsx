
import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    message: '',
    onConfirm: null,
    onCancel: null,
  });

  const openModal = (content) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent({
      title: '',
      message: '',
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
