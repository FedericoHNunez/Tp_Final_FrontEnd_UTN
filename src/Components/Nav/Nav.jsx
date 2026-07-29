import { Link, NavLink } from 'react-router'
import React from 'react'
import { NavIcons } from "../../assets/NavIcons.js"
import './Nav.css'

export const Nav = () => {

  const imagesIcon = NavIcons.find(icon => icon.ruta === 'multimedia')
  const communitiesIcon = NavIcons.find(icon => icon.ruta === 'communities')
  return (
    <>

      <nav className="header-nav-desktop">
        <div className="nav-list_superior">
          <ul className="nav-list_superior_items">
            {NavIcons
              .filter(icon => icon.id !== imagesIcon.id)
              .map(icon => (
                <li key={icon.id} className='nav-liButton center'>
                  <NavLink to={icon.ruta}>
                    {({ isActive }) => (
                      <span
                        dangerouslySetInnerHTML={{
                          __html: isActive
                            ? icon.variantes.seleccionado
                            : icon.variantes.sin_seleccionar,
                        }}
                      />
                    )}
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>
        <div className="nav-list_inferior">
          <ul>
            <li className='nav-liButton center'>
              <button className='nav-button' title='Boton de Acceso a la seccion de multimedia personal'>
                <span
                  dangerouslySetInnerHTML={{
                    __html: imagesIcon.variantes.default,
                  }}
                />
              </button>

            </li>
            <li className='nav-liButton center'>
              <Link to="/profile" >
                <img src={`./img/avatarDefault.webp`} alt="Mi perfil" className='img-profile-link' />
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <nav className="header-nav-mobile">
        <ul className="nav-list_mobile_items">
          {NavIcons
            .filter(icon => icon.id !== imagesIcon.id && icon.id !== communitiesIcon.id)
            .map(icon => (
              <li key={icon.id}  >
                <NavLink to={icon.ruta} >
                  {({ isActive }) => (
                    <div className='nav-mobile-items-content'>
                      <div className="nav-liButton center">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: isActive
                              ? icon.variantes.seleccionado
                              : icon.variantes.sin_seleccionar,
                          }}
                        />
                      </div>
                      <p>{icon.nombre}</p>
                    </div>
                  )}
                </NavLink>
              </li>
            ))}
        </ul>
      </nav>

    </>
  )
}

