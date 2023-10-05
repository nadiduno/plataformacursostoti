import { NavLink } from 'react-router-dom'
import { FolderOpen, SignIn } from 'phosphor-react'
import { FooterPage } from '../components/FooterPage'
import { Siderbar2 } from '../components/Sidebar'
import { TitlePage } from '../components/TitlePage'


import '../styles/VideoLesson.style.css';


export function HomePage() {
    
    return (
        <div className='containerMain'>
            <div className='container'>
                <Siderbar2 />
                <main>
                    <TitlePage text='Full Stack' />
                    <div className="boxOrange">
                        <div className="textWelcome">
                            <h1>Olá Toter!</h1>
                            <p>Bem-vindo ao Sistema de Controle das Aulas</p>
                        </div>
                        <div className="boxViolet">
                            <div className='buttonTrasnparent'>
                            <nav>
                                <NavLink className="nav-link" to="/curso-aula" title="Cursos/Aulas">
                                    <SignIn className='buttonNone linkHover imagenIcon' size={20} />
                                    Entrar no sistema
                                </NavLink>
                            </nav>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <FooterPage />
        </div>
    );
}
