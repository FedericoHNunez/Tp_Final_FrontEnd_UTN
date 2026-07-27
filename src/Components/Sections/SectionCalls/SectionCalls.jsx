import React, { useState } from "react";
import { InputSearchContact } from "../../InputSearchContact/InputSearchContact";

export const SectionCalls = () => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <>
            <header>
                <h1>Llamadas</h1>
            </header>
            <section>
                <InputSearchContact
                    searchChatsValue={searchValue}
                    setSearchChatsValue={setSearchValue}
                    placeholder="Buscar en llamadas"
                />
            </section>
            <section>
                <h2>No tienes llamadas</h2>

            </section>

        </>
    );
};
