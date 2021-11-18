//Dependencies

import { useHistory } from 'react-router-dom';
import { useContext } from "react";

//Icons

import illustration from '../images/illustration.svg'
import logo from '../images/logo.svg'
import googleIcon from '../images/google-icon.svg'

//Another components

import { Button } from '../Components/Button';

//SASS

import '../styles/auth.scss'

//Toastify

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Context

import { AuthContext } from "../contexts/AuthContext";

//Home Component


export function Home(){

    const {user,signInWithGoogle} = useContext(AuthContext)
    const history = useHistory()

    async function navigateNewRoom(){

        if(!user){
            await signInWithGoogle()
        }

        history.push('/rooms/new')
        toast.success(`Bem-vindo!`)

    }



    return(
       
        <div id="page-auth"> 
            <aside>
                <img src={illustration} alt="Question"/>
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire suas dúvidas em tempo real</p>
            </aside>

            <main>
                <div id="google-form">
                    <img src={logo} alt="logo" className="logo" />
                    <button onClick={navigateNewRoom}>
                        <img src={googleIcon} alt="google icon" />
                        Crie sua sala com o google
                    </button>
                </div>

                <p>Ou entre em uma sala</p>       
        
                <form action="" >          
                    <input
                     type="text" 
                     placeholder="Digite o código da sala"
                     />
                    <Button type="submit">Entrar na sala</Button>
                </form>
            </main>

        </div>

    )
}