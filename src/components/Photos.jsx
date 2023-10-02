import '../styles/Photos.style.css'
export function Photos() {
    return (
        <div className="fundo">
            <div className="backgroundPhoto backgroundPhoto1 backgroundPhoto2" >
                {/* <img
                    className="backgroundPhoto backgroundPhoto1"
                    src="src/assets/FotoToti1.svg"
                    alt=""
                /> */}
            </div>
            <div>
                <img
                    className="backgroundPhoto backgroundPhoto2"
                    src="src/assets/FotoToti2.svg"
                    alt=""
                />
            </div>
        </div>
    )
}