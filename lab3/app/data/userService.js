import { useEffect, useState } from "react";
import { auth } from "./init";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const loginWithEmail = async (email, password, navigate) => {
  const userCredentials = await signInWithEmailAndPassword(auth, email, password);
  if(userCredentials.user) {
    navigate("/");
  }
}

export const login = async (navigate) =>{
  const userCredentials = await signInWithPopup(auth, googleProvider);
  if(userCredentials.user) {
    navigate("/");
  }
}

export const logout = async () => {
  signOut(auth);
}

// export const useUser = () => {

//   const [user, setUser] = useState(auth?.currentUser);

//   useEffect(() => {
//     auth.onAuthStateChanged( u => setUser(u));
//   }, [])

//   return user;
// }

export const useUser = () => {
  const [user, setUser] = useState(undefined); // 🔧 start with undefined

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u); // could be null or user
    });

    return () => unsubscribe(); // good practice to clean up
  }, []);

  return user; // now: undefined (loading), null (logged out), object (logged in)
};