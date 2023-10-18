// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJeanw8dTpmGP1SBDkH1V-dycTZHbDAEA",
  authDomain: "e-commerce-project-b6787.firebaseapp.com",
  projectId: "e-commerce-project-b6787",
  storageBucket: "e-commerce-project-b6787.appspot.com",
  messagingSenderId: "720820125066",
  appId: "1:720820125066:web:f127dc5a509640c284dc73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);