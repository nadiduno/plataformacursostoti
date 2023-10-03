import "../styles/Card.style.css"

export function Card() {
    return (
        <div className='card'>
            <div className='cardTop'>
                <img src='src\assets\Rectangle 2.svg' alt='' />
                <p className='textCard'> Projetos </p>
            </div>
            <div className='cardBottom'>
                <div className='description1'>
                    <p>Gerenciamento de Projetos</p>
                </div>
                <div className='description2'>
                    <div>
                        <img src='src\assets\Ellipse 1.svg' alt='' />
                    </div>
                    <div>
                        <p>Sophie Orellana</p>
                        <span>Web Developer</span>
                    </div>
                    <div className='silhouetteGray'>
                        <p>20</p>
                        <span>Aulas </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
