import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "glamour-clothing.firebaseapp.com",
  projectId: "glamour-clothing",
  storageBucket: `${process.env.REACT_APP_FIREBASE_storageBucket}`,
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_messagingSenderId}`,
  appId: `${process.env.REACT_APP_FIREBASE_messagingSenderId}`,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export const googleSignIn = async () => {
  try {
   await signInWithPopup(auth, provider)
  } catch (error) {
    console.log(error.message)
  }
}

export const checkUser = async (res, others) => {
  if(!res) return;
  const userRef = doc(db, "users", res.uid);
  const getUser = await getDoc(userRef);

  if(!getUser.exists()){
    const {email, displayName} = res;
    const createdDate = new Date();

    try {
      await setDoc(userRef, {
        FullName: displayName,
        Email: email,
        DateCreated: createdDate,
        ...others,
      });
    } catch (error) {
      console.log(error.message)
    }
  }else{
    console.log('user already exist');
  }

  return userRef;
}