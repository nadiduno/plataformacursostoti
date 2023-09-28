import { Cards } from "../components/Card"
import "../styles/Course.style.css"
import "../styles/HomePage.style.css"

export function Course() {
    return (
        <div className="containerMain">
            <div className=" container">
                <aside className="sideBar" >
                    <img src="src\assets\LogoToti.svg" alt="" />
                </aside>
                <div className="containerCentral">
                    <div>
                        <h1>Full Stack </h1>
                    </div>
                    <div className="boxOrange">
                        <div className="cardTop">
                            <img src="src\assets\Rectangle 2.svg" alt="" />

                            <p className="textCard"> Projetos </p>
                        </div>
                        <div className="cardBottom">
                            <p>Gerenciamento de Projetos
                            </p>
                            <img src="src\assets\Ellipse 1.svg" alt="" />
                            Sophie Orellana
                            <p>Web Developer</p>
                            <p>20</p>
                            <p>Aulas </p>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <a href="https://totidiversidade.com.br/"
                    target="_blank"
                    className="linkHover"
                >
                    Toti Diversidade
                </a>
                <span>Todos os direitos reservados  - 2023 </span>
                <div className="logoSocial">
                    <img src="src\assets\Logos.svg" alt="" />
                </div>
            </footer>

        </div>
    );
}


