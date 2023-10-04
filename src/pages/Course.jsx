

import { Siderbar2 } from '../components/Sidebar'

import { FooterPage } from '../components/FooterPage'

import '../styles/Main.style.css'
import '../styles/Course.style.css'
import { Card } from '../components/Card'
import { TitlePage } from '../components/TitlePage'

export function Course() {
    return (
        <div className='containerMain'>
            {/* <img className='photo' src="src/assets/FotoToti1.svg" alt="" /> */}

            <div className='container'>
                <Siderbar2 />
                <main>
                    <TitlePage text='Curso de Full Stack' />
                    <div className="boxOrange">
                        <div className='containerCard'>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </main>
            </div>
            <FooterPage />
        </div>
    )
}

