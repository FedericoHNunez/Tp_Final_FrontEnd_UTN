import React from 'react'
import './SideBarHome.css'
import { Link } from 'react-router'
import PcHomeSideBar from ".../../../src/assets/img/PcHomeSideBar.jpeg";
export const SideBarHome = () => {
    return (
        <>

            <div className="sideBarHome-div">
                <section className="sideBarHome">
                    <div className="sideBarHome-container ">
                        <div className="sideBarHome-img">
                            <img src={PcHomeSideBar} alt="imagen resprentativa de una Notebook" />
                        </div>
                        <h1>Descarga Whatsapp para Windows</h1>
                        <p>Obtén funciones adicionales, como llamadas y videollamadas, compartir pantalla y más</p>
                        <button disabled>DESCARGAR</button>
                    </div>
                </section>
                <section className="sideBarHome-options">
                    <ul className="sideBarHome-options-list">
                        <li>
                            <Link to="/home" >
                                <span className='sideBarHome-options-list-span center'>
                                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" ><title>Enviar Documento</title><path d="M9 18h6c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 15 16H9c-.28 0-.52.1-.71.29A.94.94 0 0 0 8 17c0 .28.1.52.29.71.19.2.43.29.71.29Zm0-4h6c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 15 12H9c-.28 0-.52.1-.71.29A.94.94 0 0 0 8 13c0 .28.1.52.29.71.19.2.43.29.71.29Zm-3 8c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V4c0-.55.2-1.02.59-1.41C4.98 2.19 5.45 2 6 2h7.18a1.97 1.97 0 0 1 1.4.58l4.85 4.84a1.94 1.94 0 0 1 .57 1.4V20c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H6Zm7-14V4H6v16h12V9h-4a.97.97 0 0 1-.71-.29A.97.97 0 0 1 13 8Z"></path></svg>
                                </span>
                                <p className='sideBarHome-options-list-p'>Enviar Documento</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/home" >
                                <span className='sideBarHome-options-list-span center'>
                                    <span aria-hidden="true" className="xuwfzo9 xxk0z11 xvy4d1p"><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" ><title>Agregar contacto</title><path d="M18 11h-2a.97.97 0 0 1-.71-.29A.97.97 0 0 1 15 10c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h2V7c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v2h2c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 22 11h-2v2c0 .28-.1.52-.29.71A.94.94 0 0 1 19 14a.97.97 0 0 1-.71-.29A.97.97 0 0 1 18 13v-2Zm-9 1a3.9 3.9 0 0 1-2.83-1.18A3.85 3.85 0 0 1 5 8c0-1.1.4-2.04 1.17-2.83A3.85 3.85 0 0 1 9 4c1.1 0 2.04.4 2.82 1.17A3.85 3.85 0 0 1 13 8c0 1.1-.4 2.04-1.18 2.82A3.85 3.85 0 0 1 9 12Zm-8 6v-.8c0-.57.15-1.09.44-1.56a2.9 2.9 0 0 1 1.16-1.09 13.76 13.76 0 0 1 9.65-1.16c1.07.26 2.12.64 3.15 1.16.48.25.87.61 1.16 1.09.3.47.44 1 .44 1.56v.8c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H3c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41Zm2 0h12v-.8a.97.97 0 0 0-.5-.85c-.9-.45-1.8-.79-2.72-1.01a11.6 11.6 0 0 0-5.55 0c-.92.22-1.83.56-2.73 1.01a.97.97 0 0 0-.5.85v.8Zm6-8c.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41C10.02 6.19 9.55 6 9 6c-.55 0-1.02.2-1.41.59C7.19 6.98 7 7.45 7 8c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59Z"></path></svg></span>
                                </span>
                                <p className='sideBarHome-options-list-p'>Añadir contacto</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/home" >
                                <span className='sideBarHome-options-list-span center'>
                                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="currentColor"><title>wds-ic-logo-meta-ai-color</title><g clipPath="url(#WDSIconWdsIcLogoMetaAiColor__a)"><path fill="url(#WDSIconWdsIcLogoMetaAiColor__b)" d="M8.07 15.54c1.74 0 2.88 2.43 2.88 4.26 0 1.56-.81 3.27-2.25 3.27-1.68 0-2.88-2.34-2.88-4.29 0-1.59.81-3.24 2.25-3.24m6.21.96c2.16 0 4.71 1.89 4.71 3.81 0 1.26-1.11 1.95-2.4 1.95-2.13 0-4.65-1.86-4.65-3.84 0-1.29 1.08-1.92 2.34-1.92m-9.03-6.03c1.23 0 1.95.81 1.95 2.01 0 2.16-2.28 4.53-4.35 4.53-1.2 0-1.98-.81-1.98-2.04 0-2.1 2.28-4.5 4.38-4.5m15.75.66c1.53 0 2.55.81 2.55 2.04 0 1.98-2.7 3.48-4.74 3.48-1.56 0-2.55-.9-2.55-2.07 0-1.92 2.64-3.45 4.74-3.45m-2.04-7.86c1.38 0 2.1 1.44 2.1 2.88 0 1.92-1.29 4.53-3.18 4.53-1.38 0-2.13-1.38-2.13-2.85 0-1.98 1.35-4.56 3.21-4.56M5.46 4.35c1.98 0 4.02 1.08 4.02 2.67 0 1.5-1.8 2.37-3.57 2.37-1.98 0-4.02-1.08-4.02-2.64 0-1.44 1.71-2.4 3.57-2.4m5.55-3.9c2.07 0 4.05 2.58 4.05 4.71 0 1.23-.66 2.13-1.89 2.13-2.07 0-4.08-2.58-4.08-4.68 0-1.2.66-2.16 1.92-2.16"></path></g><defs><linearGradient id="WDSIconWdsIcLogoMetaAiColor__b" x1="14.12" x2="20.68" y1="-1.69" y2="20.78" gradientUnits="userSpaceOnUse"><stop stopColor="#f356ff"></stop><stop offset="1" stopColor="#4641ff"></stop></linearGradient><clipPath id="WDSIconWdsIcLogoMetaAiColor__a"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg>
                                </span >
                                <p className='sideBarHome-options-list-p'>Preguntale a Meata Ia</p>
                            </Link>
                        </li>
                    </ul>
                </section>
            </div>


        </>
    )
}