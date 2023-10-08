import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile,GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";

export const authContex = createContext(null)
const AuthProvider = ({children}) => {
    const googlePro = new GoogleAuthProvider()
    const [user,setUser]= useState('')
    const [loading,setLoading]=useState(true)
    const [disName,setDisName]=useState('')
    console.log(disName);
  
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUser=(name,link)=>{
        setLoading(true)
     
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: link
          })
      }
      const googleSignIn =()=>{
        setLoading(true)
          return signInWithPopup(auth, googlePro)  
      }
      const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
      }

      const logOut =()=>{
        setLoading(true)
        return signOut(auth)
      }
    
    useEffect(()=>{
        const unSubs = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unSubs()
    },[])
    const handleName=name=>{
     return setDisName(name)
    }


    const authInfo = {user,createUser,updateUser,googleSignIn,signInUser,logOut,loading,setDisName,disName,handleName}
    return (
        <authContex.Provider value={authInfo}>
            {children}
        </authContex.Provider>
    );
};

export default AuthProvider;