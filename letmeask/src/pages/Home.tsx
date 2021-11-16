import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged} from "firebase/auth";
import { auth } from '../services/firebase';
import { useHistory } from 'react-router-dom';

import illustration from '../images/illustration.svg'
import logo from '../images/logo.svg'
import googleIcon from '../images/google-icon.svg'

import '../styles/auth.scss'
import { Button } from '../Components/Button';

//Toastify

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";

//Home Component

export function Home(){

    // useEffect(()=>{
    //     toast.success("ok")
    // },[])

    const provider = new GoogleAuthProvider();

    const history = useHistory()

    function navigateNewRoom(){

        history.push('/rooms/new')

    }

    async function handleLogin(){
        
        await signInWithPopup(auth, provider)
        .then(()=>{
            
            onAuthStateChanged(auth, (user)=>{

                if(user){

                    toast.success("Bem-vindo")
                }
                else{
                    toast.error("Algo deu errado!")
                }
            })
            
            navigateNewRoom()
        })
        .catch((error) => {
            console.log(error)
          })
    }

    return(
       
        <div id="page-auth"> 
            <aside>
                <img src={illustration} alt="Illustration image"/>
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire suas dúvidas em tempo real</p>
            </aside>

            <main>
                <div id="google-form">
                    <img src={logo} alt="logo image" className="logo" />
                    <button onClick={handleLogin}>
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