import { Link } from 'react-router-dom';
import { ArrowArcLeft, FolderOpen, House } from 'phosphor-react';
import { NavLink } from 'react-router-dom'

import '../styles/GeometricShapes.style.css'

export function GeometricShapes() {
    return (
        <div className='displayShapes'>
            <div className='displayShapes2'>
                <div className='shapes shapes1'></div>
                <div className='shapes shapes2'>
                    <nav>
                        <NavLink to="/" title="Home">
                            <House className='imagenIcon' size={80} />
                        </NavLink>
                    </nav>
                </div>
            </div>
            <div className='displayShapes2'>
                <div className='shapes shapes2 opacityShapes'></div>
                <div className='shapes shapes1'>
                    <nav>
                        <NavLink to="/curso" title="Cursos/Aulas">
                            <FolderOpen className='imagenIcon' size={80} />
                        </NavLink>
                    </nav>
                </div>
            </div>
            <div className='shapes shapes1 shapes3 opacityShapes'></div>
        </div>
    )
}