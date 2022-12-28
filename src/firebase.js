// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjpA3EDPZVJF_n0h7AQ2Dpye_Zi13gT6A",
  authDomain: "expre-df74d.firebaseapp.com",
  projectId: "expre-df74d",
  storageBucket: "expre-df74d.appspot.com",
  messagingSenderId: "1020380514613",
  appId: "1:1020380514613:web:928d1e9459d3551afae47c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;