import React from 'react'
import './SideBarHome.css'
import { Link } from 'react-router'
export const SideBarHome = () => {
    return (
        <>

<div>
            <section>
                <div className="sideBarHome-info ">
                    <div className="sideBarHome-img">
                        <img src=".../../../src\assets\img\PcHomeSideBar.jpeg" />
                    </div>
                    <h1>Descarga Whatsapp para Windows</h1>
                    <p>Obtén funciones adicionales, como llamadas y videollamadas, compartir pantalla y más</p>
                    <button disabled>DESCARGAR</button>
                </div>
            </section>
            <section>
                <ul>
                    <li>
                        <Link to="/home" >
                            <span>

                            </span>
                            <p>Enviar Documento</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/home" >
                            <span>

                            </span>
                            <p>Añadir contacto</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/home" >
                            <span>

                            </span>
                            <p>Preguntale a Meata Ia</p>
                        </Link>
                    </li>
                </ul>
            </section>
 </div>       


        </>
    )
}