import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut, TwitterAuthProvider, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null)
// socail Auth
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const FirebaseProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    console.log(user);

    // create user 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };
    // update user profile 
    const updateUserProfile = (name, image) => {
       return  updateProfile(auth.currentUser, {
            displayName:name, 
            photoURL: image
        })
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    // Google Login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    };
    // github login
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider);
    };
    // twitter login
    const twitterLogin = () => {
        return signInWithPopup(auth, twitterProvider);
    };
    // logOut 
    const logout = () => {
        setUser(null)
        signOut(auth);
    }


    // observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [])


    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logout,
        user,
        twitterLogin,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;