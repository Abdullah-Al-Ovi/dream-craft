import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile,GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";

export const authContex = createContext(null)
const AuthProvider = ({children}) => {
    const googlePro = new GoogleAuthProvider()
    const [user,setUser]= useState('')
    console.log(user);
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUser=(name,link)=>{
     
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: link
          })
      }
      const googleSignIn =()=>{
          return signInWithPopup(auth, googlePro)  
      }
      const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
      }

      const logOut =()=>{
        return signOut(auth)
      }
    
    useEffect(()=>{
        const unSubs = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=> unSubs()
    },[])


    const authInfo = {user,createUser,updateUser,googleSignIn,signInUser,logOut}
    return (
        <authContex.Provider value={authInfo}>
            {children}
        </authContex.Provider>
    );
};

export default AuthProvider;