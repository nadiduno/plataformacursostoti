// import { Cards } from "../components/Card"
import { GithubLogo, InstagramLogo, LinkedinLogo, UserCircle } from "phosphor-react"
import "../styles/Course.style.css"
import "../styles/HomePage.style.css"

export function Course() {
    return (
        <div className="containerMain">
            <div className="container">
                <aside className="sideBar">
                    <img src="src\assets\LogoToti.svg" alt="" />
                </aside>
                <main className="containerCentral">
                    <div className="boxOrange">
                        <div className="card">
                            <div className="cardTop">
                                <img src="src\assets\Rectangle 2.svg" alt="" />
                                <p className="textCard"> Projetos </p>
                            </div>
                            <div className="cardBottom">
                                <div className="description1">
                                    <p>Gerenciamento de Projetos</p>
                                </div>
                                <div className="description2">
                                    <div>
                                        <img src="src\assets\Ellipse 1.svg" alt="" />
                                    </div>
                                    <div>
                                        <p>Sophie Orellana</p>
                                        <span>Web Developer</span>
                                    </div>
                                    <div className="silhouetteGray">
                                        <p>20</p>
                                        <span>Aulas </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <footer>
                <a
                    href="https://totidiversidade.com.br/"
                    target="_blank"
                    className="linkHover"
                >
                    Toti Diversidade
                </a>
                <span>Todos os direitos reservados  - 2023 </span>
                <div className="logoSocial">
                    <a
                        href="https://github.com/toti-edu"
                        target="_blank"
                        className="linkHover"
                    >
                        <GithubLogo size={30} />
                    </a>
                    <a
                        href="https://www.instagram.com/toti.diversidade/?hl=pt-br"
                        target="_blank"
                        className="linkHover"
                    >
                        <InstagramLogo size={30} />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/toti-diversidade/"
                        target="_blank"
                        className="linkHover"
                    >
                        <LinkedinLogo size={30} />
                    </a>
                </div>
            </footer>
        </div>
    )
}

