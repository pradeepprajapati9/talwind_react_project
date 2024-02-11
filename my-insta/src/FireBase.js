import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBYDCnDZa1CzLkBbq2liuERTRNZLk05uU8",
  authDomain: "insta-clone-a113d.firebaseapp.com",
  projectId: "insta-clone-a113d",
  storageBucket: "insta-clone-a113d.appspot.com",
  messagingSenderId: "572631642639",
  appId: "1:572631642639:web:92794f242549db9996297a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()