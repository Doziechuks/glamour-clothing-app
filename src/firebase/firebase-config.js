import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_V7XVBwW_sbCR7XhxhRo9iu5gIfi7HNU",
  authDomain: "glamour-clothing.firebaseapp.com",
  projectId: "glamour-clothing",
  storageBucket: "glamour-clothing.appspot.com",
  messagingSenderId: "915113671797",
  appId: "1:915113671797:web:96231c6c31e8a9488ecc3c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const googleSignIn = async () => {
  try {
   await signInWithPopup(auth, provider)
  } catch (error) {
    console.log(error.message)
  }
}