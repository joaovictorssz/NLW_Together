import illustration from '../images/illustration.svg'
import logo from '../images/logo.svg'
import { Button } from '../Components/Button'

import '../styles/newroom.scss'


export function NewRoom(){
    return(
        <div id="page-new-room">
            <aside>
                <img src={illustration} alt="illustration image" />
                <strong>Toda pergunta tem uma resposta</strong>
                <p>Aprenda e compartilhe conhecimento
                com outras pessoas</p>
            </aside>

            <main>
                <div id="create-room-form">
                    <img src={logo} alt="logo image" className="logo" />
                </div>
                <h2>Crie uma nova sala</h2>            
        
                <form action="" >          
                    <input
                     type="text" 
                     placeholder="Nome da sala"
                     />
                    <Button type="submit">Criar sala</Button>
                </form>
                <footer>
                    <p>Quer entrar em uma sala já existente? <a href="/">Clique aqui</a></p>
                </footer>
            </main>

        </div>
    )
}