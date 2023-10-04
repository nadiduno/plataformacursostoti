import "../styles/Card.style.css"
import { FooterPage } from "./FooterPage";
import { Siderbar2 } from "./Sidebar";
import { Title } from "./Title";

export function Video() {
    return (
        <div className='containerMain'>
            <div className='container'>
                <Siderbar2 />
                <main>
                    <Title text='Sistema de Controle das Aulas' />
                    <div className="boxOrange">
                    </div>
                </main>
            </div>
            <FooterPage />
        </div>
    );
}
