import '../styles/Title.style.css'

export const Title = (props) =>{
    return (
        <div className='texViolet'>
            <h1>{props.text}</h1>
        </div>
    )
}