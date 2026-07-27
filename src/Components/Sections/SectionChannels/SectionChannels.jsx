import React, { useState } from "react";
import { InputSearchContact } from "../../InputSearchContact/InputSearchContact";

export const SectionChannels = () => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <>
            <h1>Canales</h1>

            <section>
                <InputSearchContact
                    searchChatsValue={searchValue}
                    setSearchChatsValue={setSearchValue}
                    placeholder="Buscar Canales"
                />
            </section>

            <p>Sin Canales para Visualizar</p>
        </>
    );
};