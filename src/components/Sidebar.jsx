import { GeometricShapes } from './GeometricShapes'

import '../styles/Sidebar.style.css'

export function Siderbar2(){
    return(
        <aside className="sideBar">
          <img 
            className="logoToti"
            src="src/assets/LogoToti.svg" 
            alt="Logomarca da toti, são letras quadradas que diz toti na cor roxo e o ponto da i em laranja" 
          />
          <GeometricShapes />
        </aside>
    )
}