import "./SideBarContactInfo.css"
import { Link } from "react-router"
import { useContactModalActions } from "../../../Hooks/useContactModalActions"
import { Modal } from "../../Modal/Modal"

export const SideBarContactInfo = () => {

    const {
        contact_selected,
        isOpen,
        modalContent,
        closeModal,
        handleVaciarChat,
        handleEliminarChat,
        handleEliminarContacto
    } = useContactModalActions();
    return (
        <>
            <header className="contactInfoHeader">
                <Link to={`/chats/${contact_selected.id}`}>
                    <div>
                        <span>
                            <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="currentColor"><title>Volver</title><path fill="currentColor" d="m12 13.4-4.9 4.9a.95.95 0 0 1-.7.27.95.95 0 0 1-.7-.27.95.95 0 0 1-.28-.7c0-.28.1-.52.28-.7l4.9-4.9-4.9-4.9a.95.95 0 0 1-.28-.7.95.95 0 0 1 .97-.98c.3 0 .53.1.71.28l4.9 4.9 4.9-4.9a.95.95 0 0 1 .7-.27c.28 0 .52.09.7.27.18.18.27.42.27.7 0 .28-.09.52-.27.7L13.4 12l4.9 4.9c.18.18.27.42.27.7 0 .28-.09.52-.27.7a.95.95 0 0 1-.7.27.95.95 0 0 1-.7-.27L12 13.4Z"></path></svg>
                        </span>
                        <p>Volver</p>
                    </div>
                </Link>
                <Link to={`/editContact/${contact_selected.id}`}>
                    <div>
                        <p>Editar</p>
                        <span>
                            <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="none"><title>Editar Contacto</title><path fill="currentColor" d="M5 19h1.4l9.8-9.78-1.42-1.42L5 17.6V19Zm-1 2a.97.97 0 0 1-.71-.29A.97.97 0 0 1 3 20v-2.43a1.97 1.97 0 0 1 .58-1.4L16.2 3.57a2.07 2.07 0 0 1 2.19-.43c.24.11.46.26.66.46L20.43 5c.2.18.34.4.43.64a2.13 2.13 0 0 1 0 1.51c-.09.25-.23.47-.43.67l-12.6 12.6a1.94 1.94 0 0 1-1.4.58H4Z"></path></svg>
                        </span>
                    </div>
                </Link>
            </header>
            <div className="sideBarContactInfo-container">

                <section className="sideBarContactInfo-contact">
                    <div className="sideBarContactInfo-img">
                        {contact_selected.picture
                            ? <img src={contact_selected.picture.large} alt={contact_selected.name} />
                            : <img src="./img/avatarDefault.png" alt={contact_selected.name} />
                        }
                    </div>
                    <h2>{`${contact_selected.name.first} ${contact_selected.name.last}`}</h2>
                    <p>{contact_selected.cell}</p>
                </section>
                <section className="sideBarContactInfo-options">
                    <ul >
                        <li className="sideBarContactInfo-options-item">

                            <div className="center">
                                <span className='center'>
                                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="none"><title>Iniciar nuevo chat</title><path fill="currentColor" d="M9.53 13h1.98v1.97c0 .43.25.85.67.98a1 1 0 0 0 1.31-.94v-2.02h1.98c.43 0 .85-.25.98-.67a1 1 0 0 0-.94-1.31h-2.02V9.03c0-.43-.25-.85-.67-.98a1 1 0 0 0-1.31.94v2.02H9.49a1 1 0 0 0-.94 1.31c.13.42.55.67.98.67Z"></path><path fill="currentColor" fillRule="evenodd" d="M.94 5.53 3 8.85v8.48C3 18.81 4.2 20 5.67 20h13.66c1.48 0 2.67-1.2 2.67-2.67V6.67C22 5.19 20.8 4 19.33 4H1.8a1 1 0 0 0-.85 1.53ZM5 8.28v9.05c0 .37.3.67.67.67h13.66c.37 0 .67-.3.67-.67V6.67c0-.37-.3-.67-.67-.67H3.6L5 8.28Z" clipRule="evenodd"></path></svg>
                                </span>
                            </div>
                            <p>Iniciar Chat</p>
                        </li>
                        <li className="sideBarContactInfo-options-item">
                            <div className="center">
                                <span className="center">
                                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="currentColor"><title>Iniciar Llamada</title><path fill="currentColor" d="M19.95 21c-2.08 0-4.14-.45-6.17-1.36a18.3 18.3 0 0 1-5.55-3.87 18.47 18.47 0 0 1-3.87-5.54C3.46 8.18 3 6.13 3 4.04A1.02 1.02 0 0 1 4.05 3H8.1c.23 0 .44.08.63.24a.9.9 0 0 1 .32.56l.65 3.5c.03.27.03.5-.02.67-.05.19-.15.35-.28.48L6.97 10.9c.34.62.73 1.21 1.2 1.79.45.57.96 1.13 1.5 1.66A17.59 17.59 0 0 0 13.1 17l2.35-2.35a1.61 1.61 0 0 1 1.3-.4l3.45.7c.23.07.43.19.57.36.16.18.23.37.23.59v4.05A1.02 1.02 0 0 1 19.95 21ZM6.03 9l1.64-1.65L7.25 5H5.03c.08.68.2 1.36.34 2.03.16.66.37 1.32.66 1.97Zm8.95 8.95a12.42 12.42 0 0 0 4.02 1v-2.2l-2.35-.48-1.67 1.68Z"></path></svg>
                                </span>
                            </div>
                            <p>Llamada</p>

                        </li>
                        <li className="sideBarContactInfo-options-item">
                            <div className="center">
                                <span className="center">
                                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="currentColor"><title>Iniciar Videollamada</title><path fill="currentColor" d="M4 20c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V6c0-.55.2-1.02.59-1.41C2.98 4.19 3.45 4 4 4h12c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v4.5l3.15-3.15c.17-.17.35-.2.55-.13.2.09.3.25.3.48v8.6c0 .23-.1.4-.3.47-.2.09-.38.05-.55-.12L18 13.5V18c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H4Zm0-2h12V6H4v12Z"></path></svg>
                                </span>
                            </div>
                            <p>Video</p>
                        </li>
                    </ul>

                </section>

                <section className="sideBarContactInfo-actions">
                    <ul>
                        <li className="sideBarContactInfo-actions-item danger">
                            <button title="vaciar chat" onClick={handleVaciarChat}>
                                <div className="">
                                    <span className="">
                                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="none"><title>clear-refreshed</title><path fill="currentColor" d="M7 12a1 1 0 0 0 1 1h8a1 1 0 1 0 0-2H8a1 1 0 0 0-1 1Zm5 10a10.1 10.1 0 0 1-9.21-6.1A9.74 9.74 0 0 1 2 12a10.1 10.1 0 0 1 6.1-9.21A9.74 9.74 0 0 1 12 2a10.1 10.1 0 0 1 9.21 6.1c.53 1.22.79 2.52.79 3.9s-.26 2.68-.79 3.9a10.1 10.1 0 0 1-5.31 5.31A9.74 9.74 0 0 1 12 22Zm0-2c2.23 0 4.13-.77 5.68-2.32A7.72 7.72 0 0 0 20 12a7.7 7.7 0 0 0-2.32-5.67A7.72 7.72 0 0 0 12 4a7.7 7.7 0 0 0-5.67 2.33A7.72 7.72 0 0 0 4 12c0 2.23.78 4.13 2.33 5.68A7.72 7.72 0 0 0 12 20Z"></path></svg>
                                    </span>
                                    <p className="danger">Vaciar chat</p>
                                </div>
                            </button>
                        </li>

                        <li className="sideBarContactInfo-actions-item danger">
                            <button title="eliminar chat" onClick={handleEliminarChat}>
                                <div className="">
                                    <span className=" ">
                                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="none"><title>delete-refreshed</title><path fill="currentColor" d="M7 21c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V6a1 1 0 0 1 0-2h4v-.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V4h4a1 1 0 1 1 0 2v13c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H7ZM17 6H7v13h10V6ZM9 16.5c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v8Zm4 0c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v8Z"></path></svg>
                                    </span>
                                    <p className="danger">Eliminar Chat</p>
                                </div>
                            </button>
                        </li>

                        <li className="sideBarContactInfo-actions-item danger">
                            <button title="eliminar contacto" onClick={handleEliminarContacto}>
                                <div className="">
                                    <span className="">
                                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="none"><title>delete-refreshed</title><path fill="currentColor" d="M7 21c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V6a1 1 0 0 1 0-2h4v-.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V4h4a1 1 0 1 1 0 2v13c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H7ZM17 6H7v13h10V6ZM9 16.5c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v8Zm4 0c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v8Z"></path></svg>
                                    </span>
                                    <p className="danger">Eliminar Contacto</p>
                                </div>
                            </button>
                        </li>

                    </ul>
                </section>
                <Modal
                    isOpen={isOpen}
                    onClose={closeModal}
                    title={modalContent.title}
                    message={modalContent.message}
                    onConfirm={modalContent.onConfirm}
                    onCancel={modalContent.onCancel}
                />
            </div>

        </>
    )
}