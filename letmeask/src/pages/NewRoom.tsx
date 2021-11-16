import illustration from '../images/illustration.svg'
import logo from '../images/logo.svg'
import { Button } from '../Components/Button'
import logoutIcon from '../images/enter-room.svg'
import { Link } from "react-router-dom";


import { auth } from '../services/firebase'
import { useHistory } from 'react-router-dom'
import { signOut } from '@firebase/auth'

import '../styles/newroom.scss'



export function NewRoom(){

    const history = useHistory()

    async function handleLogut(){
        await signOut(auth).then(()=>{
            history.push("/")
        })
    }
    return(
        <div id="page-new-room">
            <aside>
                <img src={illustration} alt="illustration image" />
                <strong>Toda pergunta tem uma resposta</strong>
                <p>Aprenda e compartilhe conhecimento
                com outras pessoas</p>

                <footer onClick={handleLogut}>
                    <img src={logoutIcon} alt="lo" />
                    <p>Sair</p>
                </footer>
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
                    <p>Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link></p>
                </footer>
            </main>

        </div>
    )
}