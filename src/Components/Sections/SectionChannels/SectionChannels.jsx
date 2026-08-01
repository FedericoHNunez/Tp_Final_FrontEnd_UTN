import React, { useState } from "react";
import { InputSearchContact } from "../../InputSearchContact/InputSearchContact";

export const SectionChannels = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <header className="section-header">
        <h1>Canales</h1>
      </header>

      <section>
        <InputSearchContact
          searchChatsValue={searchValue}
          setSearchChatsValue={setSearchValue}
          placeholder="Buscar Canales"
        />
      </section>
      <section className="section-width center padding">
        <p>Sin Canales para Visualizar</p>
      </section>
    </>
  );
};
