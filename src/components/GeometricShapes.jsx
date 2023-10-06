import { NavLink } from 'react-router-dom'
import { FadersHorizontal, House, YoutubeLogo } from 'phosphor-react'

import '../styles/GeometricShapes.style.css'

export function GeometricShapes() {
    return (
        <div className='displayShapes'>
            <div className='displayShapes2'>
                <div className='shapes shapes1'></div>
                <div className='shapes shapes2'>
                    <nav>
                        <NavLink className="nav-link" to="/" title="Home">
                            <House className='buttonNone linkHover imagenIcon' size={80} alt='Silhueta de uma casa'/>
                        </NavLink>
                    </nav>
                </div>
            </div>
            <div className='displayShapes2'>
                <div className='shapes shapes2 opacityShapes'>
                    <nav>
                        <NavLink className="nav-link" to="/registro-aula" title="Registro/Aulas">
                            <FadersHorizontal className='buttonNone linkHover imagenIcon' size={80} alt='Silhueta de uma porta com uma seta'/>
                        </NavLink>
                    </nav>
                </div>
                <div className='shapes shapes1'>
                    <nav>
                        <NavLink className="nav-link" to="/curso-aula" title="Cursos/Aulas">
                            <YoutubeLogo className='buttonNone linkHover imagenIcon' size={80} alt='Logo de Youtube, é um play em silhueta'/>
                        </NavLink>
                    </nav>
                </div>
            </div>
            <div className='shapes shapes1 shapes3 opacityShapes'></div>
        </div>
    )
}