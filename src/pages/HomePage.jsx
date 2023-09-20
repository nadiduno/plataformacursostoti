import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react"
import "../styles/HomePage.style.css"

export function HomePage() {
    return (
        <div className="containerMain">
            <div className="container">
                <aside>
                    <img
                        src="src\assets\asidephoto.svg" 
                        alt=""
                        className="asideImg" 
                    />
                </aside>
                <main>
                    <div className="boxOrange">

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