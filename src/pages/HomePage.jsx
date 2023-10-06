import { NavLink } from 'react-router-dom'
import { SignIn } from 'phosphor-react'
import { FooterPage } from '../components/FooterPage'
import { Siderbar2 } from '../components/Sidebar'
import { TitlePage } from '../components/TitlePage'

export function HomePage() {

    return (
        <div className='containerMain'>
            <div className='container'>
                <Siderbar2 />
                <main>
                    <TitlePage text='< 💜 />' />
                    <div className="boxOrange">
                        <div className="textMain">
                            <h1>Olá Toter!</h1>
                            <p>Boas vindas! Ao sistema de controle das Aulas</p>
                        </div>
                        <div className="boxViolet">
                            <div className='buttonTrasnparent bottonAnimado linkHover spinner'>

                                <nav>
                                    <NavLink className="nav-link" to="/registro-aula" title="Cursos/Aulas">
                                        <SignIn className='buttonNone linkHover imagenIcon' size={20} alt=""/>
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
