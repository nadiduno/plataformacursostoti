import { NavLink } from 'react-router-dom'
import { ArrowArcLeft, FolderOpen, House } from 'phosphor-react'

import '../styles/GeometricShapes.style.css'

export function GeometricShapes() {
    return (
        <div className='displayShapes'>
            <div className='displayShapes2'>
                <div className='shapes shapes1'></div>
                <div className='shapes shapes2'>
                    <nav>
                        <NavLink className="nav-link" to="/" title="Home">
                            <House className='buttonNone linkHover imagenIcon' size={80} />
                        </NavLink>
                    </nav>
                </div>
            </div>
            <div className='displayShapes2'>
                <div className='shapes shapes2 opacityShapes'></div>
                <div className='shapes shapes1'>
                    <nav>
                        <NavLink className="nav-link" to="/curso-aula" title="Cursos/Aulas">
                            <FolderOpen className='buttonNone linkHover imagenIcon'  size={80} />
                        </NavLink>
                    </nav>
                </div>
            </div>
            <div className='shapes shapes1 shapes3 opacityShapes'></div>
        </div>
    )
}