import { GithubLogo, InstagramLogo, LinkedinLogo, UserCircle } from "phosphor-react"
import "../styles/HomePage.style.css"

export function Login() {
    return (
        <div className="containerMain">
            <div className="container">
                <aside className="sideBar">
                    <img src="src\assets\LogoToti.svg" alt="" />
                    <img className="sideImage" src="src\assets\asidephoto.svg" alt=""
                    />
                </aside>
                <main className="containerCentral">
                    <div className="textForget">
                        <p className="textViolet linkHover">Criar uma conta</p>
                    </div>
                    <div className="boxOrange">
                        <div className="textWelcome">
                            <h1>Boas vindas!</h1>
                            <p>Peencha seus dados por favor</p>
                        </div>
                        <div className="boxViolet">
                            <h2> Formulário com bootstrap</h2> <br></br>
                            <div className="textInfo">
                                <form>
                                    <label for="username">Nome de usuario ou E-mail:
                                    </label><br></br>
                                    <input type="text" id="username" name="username">
                                    </input><br></br>
                                    <label for="password"> Senha: </label><br></br>
                                    <input type="password" id="password" name="password">
                                    </input>
                                </form>
                            </div>

                        </div>
                        <p><b>Se você ainda não tem cadastro</b></p>
                        <div className="textAccount">
                            <button className="buttonViolet linkHover">
                                <UserCircle size={24} />
                                Cadastrar-me
                            </button>
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