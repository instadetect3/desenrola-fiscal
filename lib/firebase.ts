import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDJqbAPKJ01zFL8EO1ZYWHBW53o8tsWWzw",
  authDomain: "desenrola-fiscal.firebaseapp.com",
  projectId: "desenrola-fiscal",
  storageBucket: "desenrola-fiscal.firebasestorage.app",
  messagingSenderId: "586091596218",
  appId: "1:586091596218:web:fe01863ee80e022f6cb583",
}

const app = initializeApp(firebaseConfig)

// 🔥 EXPORTA OS DOIS
export const auth = getAuth(app)
export const db = getFirestore(app)