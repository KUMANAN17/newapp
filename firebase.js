// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey:process.env.NEXT_PUBLIC_API,
  authDomain:process.env.NEXT_PUBLIC_AUTH_DOMAIN ,
  projectId:process.env.NEXT_PUBLIC_PROJECT_ID ,
  storageBucket:process.env.NEXT_PUBLIC_STORAGE_BUCKET ,
  messagingSenderId:process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId:process.env.NEXT_PUBLIC_API_ID 
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

const provider = new GoogleAuthProvider();

export const signInWithGoogle = ()=>signInWithPopup(auth, provider); 