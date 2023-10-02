import { ArrowArcLeft, House } from 'phosphor-react';

import '../styles/GeometricShapes.style.css'

export function GeometricShapes() {
    return (
        <div className='displayShapes'>
            <div className='displayShapes2'>
                <div className='shapes shapes1'></div>
                <div className='shapes shapes2'>
                    <House className='imagenIcon' size={30} />
                </div>
            </div>
            <div className='displayShapes2'>
                <div className='shapes shapes2 opacityShapes'></div>
                <div className='shapes shapes1'>
                    <ArrowArcLeft className='imagenIcon' size={30} />
                </div>
            </div>
            <div className='shapes shapes1 shapes3 opacityShapes'></div>
        </div>
    )
}