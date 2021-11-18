//Firebase

import { auth } from '../services/firebase'
import { useHistory } from 'react-router-dom'
import { signOut } from '@firebase/auth'

//Dependencies

import { useContext } from 'react';
import { Link } from "react-router-dom";

//Icons

import illustration from '../images/illustration.svg'
import logo from '../images/logo.svg'
import logoutIcon from '../images/enter-room.svg'

//Another Components

import { Button } from '../Components/Button'

//SASS

import '../styles/newroom.scss'

//Context

import { AuthContext } from '../contexts/AuthContext';

//NewRoom Component

export function NewRoom(){

    const history = useHistory()
    const {user} = useContext(AuthContext)

    async function handleLogut(){
        await signOut(auth).then(()=>{
            history.push("/")
        })
    }

    return(
        <div id="page-new-room">
            <aside>
                <img src={illustration} alt="Question" />
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
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <h2>Crie uma nova sala</h2>            
                <h1>{user?.name}</h1>
        
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