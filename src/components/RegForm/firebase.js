import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAEiEEaKl2HRyjjWwWHhNP8WjHauV8CrFY",
  authDomain: "vue-roject.firebaseapp.com",
  databaseURL: "https://vue-roject-default-rtdb.firebaseio.com",
  projectId: "vue-roject",
  storageBucket: "vue-roject.appspot.com",
  messagingSenderId: "142350100074",
  appId: "1:142350100074:web:e9e9af9bcb7fc87aec8c13",
  measurementId: "G-LL71SD2N4R"
};

initializeApp(firebaseConfig);

export const db = getFirestore()

export const auth = getAuth()