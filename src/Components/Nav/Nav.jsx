import { Link, NavLink } from 'react-router'
import { useLocation } from 'react-router'
import React from 'react'
import { NavIcons } from "../../assets/NavIcons.js"
import './Nav.css'

export const Nav = () => {

  const imagesIcon = NavIcons.find(icon => icon.ruta === 'multimedia')
 
  return (
    <>

      <nav className="header-nav">
        <div className="nav-list_superior">
          <ul className="nav-list_superior_items">
            {NavIcons
              .filter(icon => icon.id !== imagesIcon.id)
              .map(icon => (
                <li key={icon.id} className='nav-liButton' >
                  <NavLink to={icon.ruta}>
                    {({ isActive }) => (
                      <button >
                        <span
                          dangerouslySetInnerHTML={{
                            __html: isActive
                              ? icon.variantes.seleccionado
                              : icon.variantes.sin_seleccionar,
                          }}
                        />
                      </button>
                    )}
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>
        <div className="nav-list_inferior">
          <ul>
            <li className='nav-liButton'>
                <button className='nav-button' title='Boton de Acceso a la seccion de multimedia personal'>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: imagesIcon.variantes.default,
                    }}
                  />
                </button>

            </li>
            <li className='nav-liButton'>
              <Link to="/profile">
                <button > Me </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

    </>
  )
}

