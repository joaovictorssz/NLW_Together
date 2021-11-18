import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth'
import {createContext, ReactNode, useEffect, useState} from 'react'
import { auth } from '../services/firebase'

type UserType = {
    id: string,
    name: string,
    avatar: string | null
  }

type AuthContextType ={

    user: UserType | undefined,
    signInWithGoogle: ()=> Promise<void>;
  
  }

type AuthContextProps={
    children: ReactNode
}
  
export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider(props : AuthContextProps){

    const [user, setUser] = useState<UserType>()

    async function signInWithGoogle(){
        const provider = new GoogleAuthProvider()
    
        const result  = await signInWithPopup(auth, provider)
    
          if(result.user){
            const {displayName, photoURL, uid} = result.user
    
            if(!displayName){
              throw new Error("Missing info")
            }
    
            setUser({
              id: uid,
              name: displayName,
              avatar: photoURL
            })
    
            console.log(user)
      }
    
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(result =>{
          if(result){
            const {displayName, photoURL, uid} = result
    
          if(!displayName){
            throw new Error("Missing info")
          }
    
          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL
          })
          }
        })
    
        return ()=>{
            unsubscribe()
        }
    },
    [])

    return(
        <AuthContext.Provider value={{user, signInWithGoogle}}>
            {props.children}
        </AuthContext.Provider>
    )


}