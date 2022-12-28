import React , {createContext ,useContext, useEffect , useState} from 'react'
import {signInWithPopup , GoogleAuthProvider ,signOut,onAuthStateChanged} from 'firebase/auth'
import auth from '../firebase'

const AuthContext=createContext()

const AuthContextProvider = ({children}) => {
    const  [user,setUser] = useState({})

    const googleSignIn = () =>{
        const provider =new GoogleAuthProvider();
        signInWithPopup(auth,provider);
    }

    const logout = () =>{
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            
            console.log(currentUser)
            if (currentUser){          
                localStorage.setItem('user', JSON.stringify(currentUser.accessToken));
            }else{
            localStorage.removeItem('user');
            }
           
        })
        return() =>{ unsubscribe() }
    },[])

  return (
    <AuthContext.Provider value={{googleSignIn , user , logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}

export default AuthContextProvider
