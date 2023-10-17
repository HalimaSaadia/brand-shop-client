import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, pass)=> {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const updateUser = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    
    const loginWithEmailAndPassword = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, user => {
            setUser(user)
            setLoading(false)
        })

        return () => unSubscribe()
    },[])

    
    const userInfo = {
        user,
        loading,
        createUser,
        updateUser,
        loginWithEmailAndPassword,
        loginWithGoogle
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;