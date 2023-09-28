import { GithubLogo, InstagramLogo, LinkedinLogo, UserCircle } from "phosphor-react"
import "../styles/HomePage.style.css"

export function HomePage() {
    return (
        <div className="containerMain">
            <div className="container">
                <aside className="sideBar">
                    <img
                        className="sideImage"
                        src="src\assets\asidephoto.svg"
                        alt=""
                    />
                </aside>
                <main className="containerCentral">
                    <div className="boxOrange">
                        <div className="textWelcome">
                            <h1>Olá Toter!</h1>
                            <p>Faça login ou crie uma conta</p>
                        </div>
                        <div className="boxViolet">
                            Formulário com bootstrap
                        </div>
                        <div className="textAccount">
                            <div>
                                <p>Não tenho uma conta</p>
                                <button className="buttonText textViolet linkHover">Criar conta</button>
                            </div>
                            <button className="buttonViolet linkHover">
                                <UserCircle size={24} />
                                Entrar na minha conta
                            </button>
                        </div>
                    </div>

                    <div className="textForget">
                        <p className="textViolet linkHover">Esqueceu seus dados?</p>
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