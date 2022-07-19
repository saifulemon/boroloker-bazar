import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signinWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            }).catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const logOut = () => {
        signOut(auth)
        .then( () => {
            setUser({});
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });

    }, [])
    return {
        user,
        signinWithGoogle,
        logOut
    }
}

export default useFirebase;