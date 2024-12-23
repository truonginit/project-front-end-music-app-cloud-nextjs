// import firebase
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// firebase config 
const firebaseConfig = {
  apiKey: "AIzaSyD-bTFVKHHPevVyFd71KWONZVMrK-2VVVg",
  authDomain: "music-app-cloud-nextjs.firebaseapp.com",
  databaseURL: "https://music-app-cloud-nextjs-default-rtdb.firebaseio.com",
  projectId: "music-app-cloud-nextjs",
  storageBucket: "music-app-cloud-nextjs.firebasestorage.app",
  messagingSenderId: "803329272244",
  appId: "1:803329272244:web:d432fb602ac033abfd6ae1"
};

// init firebase
const app = initializeApp(firebaseConfig);

// Lấy database trên firebase
export const Database = getDatabase(app);