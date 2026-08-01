import React from "react";
import { IoMdSearch } from "react-icons/io";
import "./InputSearchContact.css";

export const InputSearchContact = ({
  searchChatsValue,
  setSearchChatsValue,
  placeholder,
}) => {
  const onChangeSearchChats = (e) => {
    setSearchChatsValue(e.target.value);
  };

  return (
    <div className="ChatsPreview-header-input-container">
      <div className="ChatsPreview-header-input">
        <label htmlFor="searchChats" className="label-none">
          {" "}
          Buscar
        </label>
        <input
          id="searchChats"
          name="searchChats"
          type="text"
          placeholder={placeholder}
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
