import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDK5Re2eoxXl2XL7J_MGfH8wCrhjL_GIno",
  authDomain: "crud-mtavasci.firebaseapp.com",
  projectId: "crud-mtavasci",
  storageBucket: "crud-mtavasci.appspot.com",
  messagingSenderId: "1080105080270",
  appId: "1:1080105080270:web:92fc91cd9fd0752bf1879f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;