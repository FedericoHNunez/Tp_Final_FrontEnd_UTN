import React, { useState } from "react";
import { InputSearchContact } from "../../InputSearchContact/InputSearchContact";

export const SectionCalls = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <header className="section-header">
        <h1>Llamadas</h1>
      </header>
      <section>
        <InputSearchContact
          searchChatsValue={searchValue}
          setSearchChatsValue={setSearchValue}
          placeholder="Buscar en llamadas"
        />
      </section>
      <section className="section-width center padding">
        <p>No tienes llamadas</p>
      </section>
    </>
  );
};
