import "../styles/Login.style.css"
import "../styles/HomePage.style.css"
export function Login() {
    return (
        
            
        <body>
            <div className="containerMain">
                <div className="container">
                    <aside className="sideBar">
                        <img className="sideImage" 
                        src="src\assets\asidephoto.svg" alt=""/>
                    </aside>
                </div>
            <main className="containerCentral">
              <div className="boxOrange">
                <div className="textWelcome">
              <h1> Bemvindo ao Curso de programação da TOTI</h1>
              <p><h2>Acessa sua conta</h2></p>
              </div>   
              <div className="boxViolet">          
               <form>
                <label for="userName"><h2>Nome de usuário ou e-mail:</h2></label><br></br>
                <input type="text" id="userName" name="userName"> </input><br></br>

                </form>
                </div>
                </div>  
            </main> 
            <div className="container">
                
            <div className="textWelcome">
                <h1>Bem vindo</h1>
                <p>Faça login ou cria sua conta</p>
            </div>
            <div className="buttonText TextRed"> 
            </div>
           <p>Oi Tchuda</p>
           <p> ver atualização</p> 
           </div>
           
            </div>
        </body>
    )
}