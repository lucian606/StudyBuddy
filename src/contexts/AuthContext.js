import React, { useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(() => {
        try {
            const item = window.sessionStorage.getItem("user");
            return item;
        } catch (error) {
            return null;
        }
    });
    const [loading, setLoading] = useState(false);

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function loginWithGoogle() {
        setLoading(true);
        auth.signInWithPopup(googleProvider).then((res,err) => {
            try {
                setLoading(false);
                return res;
            } catch (error) {
                setLoading(false);
                return null;
            }
        });
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            if (user != null) {
                window.sessionStorage.setItem("user", user);
            }
        })

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        signup,
        login,
        loginWithGoogle,
        loading,
        setLoading
    };
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}