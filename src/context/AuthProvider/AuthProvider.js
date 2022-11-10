import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    const signIn =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }


    useEffect(() => {

        const unsubsscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log('user inside state change', currentUser)
            setUser(currentUser)
        })

        return () => {
            unsubsscribe();
        }

    }, [])


    const authInfo ={user, createUser, updateUserProfile, logOut, signIn, providerLogin}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;