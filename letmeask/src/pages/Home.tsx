import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut} from "firebase/auth";
import { auth } from '../services/firebase';
import { useHistory } from 'react-router-dom';

import illustration from '../images/illustration.svg'
import logo from '../images/logo.svg'
import googleIcon from '../images/google-icon.svg'


import '../styles/auth.scss'
import { Button } from '../Components/Button';



export function Home(){


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
                    const userData= {
                        email: user.email,
                        name: user.displayName,
                        photo: user.photoURL,
                        uid: user.uid
                    }
                    console.log(userData)
                    
                }
                else{
                    console.log("user is not  connected")
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
                <img src={illustration} alt="illustration image" />
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