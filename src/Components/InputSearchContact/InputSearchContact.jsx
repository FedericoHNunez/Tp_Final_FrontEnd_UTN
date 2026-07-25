import React from "react";
import { IoMdSearch } from "react-icons/io";
import "./InputSearchContact.css";

export const InputSearchContact = ({ searchChatsValue, setSearchChatsValue }) => {
  const onChangeSearchChats = (e) => {
    setSearchChatsValue(e.target.value);
  };

  return (
    <div className="ChatsPreview-header-input-container">
      <div className="ChatsPreview-header-input">
        <label htmlFor="searchChats" disabled></label>
        <input
          id="searchChats"
          name="searchChats"
          type="text"
          placeholder="Buscar en chats de grupos"
          value={searchChatsValue}
          onChange={onChangeSearchChats}
        />
        <span className="search-icon">
          <IoMdSearch />
        </span>
      </div>
    </div>
  );
};
