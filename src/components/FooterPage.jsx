import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import '../styles/FooterPage.style.css'

export function FooterPage() {
    return (
        <footer>
            <div className="containerFooter">
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
                    <GithubLogo size={30} alt="Logo de Github, é um gato em silhueta preta com pés de polvo"/>
                </a>
                <a
                    href="https://www.instagram.com/toti.diversidade/?hl=pt-br"
                    target="_blank"
                    className="linkHover"
                >
                    <InstagramLogo size={30} alt="Logo de Linkedin , é uma câmara em silhueta preto" />
                </a>
                <a
                    href="https://www.linkedin.com/company/toti-diversidade/"
                    target="_blank"
                    className="linkHover"
                >
                    <LinkedinLogo size={30} alt="Logo de Linkedin , é uma letra IN em preto"/>
                </a>
            </div>
            </div>
        </footer>
    )
}