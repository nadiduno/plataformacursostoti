import { Cards } from "../components/Card"
import "../styles/Course.style.css"

export function Course() {
    return (
        <div>
            <img src="assets\LogoToti.svg" alt="" />
            <h1> Full Stack </h1>
            <div className="quadradolaranja">
                <Cards />
            </div>
        </div >
    );
}
