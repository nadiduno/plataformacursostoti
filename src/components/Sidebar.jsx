import '../styles/Sidebar.style.css'
import { GeometricShapes } from './GeometricShapes'


export function Siderbar1(){
  return(
      <aside className="sideBar">
        
      </aside>
  )
}

export function Siderbar2(){
    return(
        <aside className="sideBar">
          <img 
            className="logoToti"
            src="src\assets\LogoToti.svg" 
            alt="" 
          />
          <GeometricShapes />
        </aside>
    )
}