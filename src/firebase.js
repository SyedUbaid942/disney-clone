import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDe0uWVp817k5YWiIPYAdLszItR8SodYvE",
  authDomain: "disneyplus-clone-886f7.firebaseapp.com",
  projectId: "disneyplus-clone-886f7",
  storageBucket: "disneyplus-clone-886f7.appspot.com",
  messagingSenderId: "329993837915",
  appId: "1:329993837915:web:ec10b74c2b8192bcb58e7e",
  measurementId: "G-BEMG4X3FXH",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
