// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZP3TUgm--aE3DUPwPVi-wfBwO2vyRq2c",
  authDomain: "web-ai-2094c.firebaseapp.com",
  projectId: "web-ai-2094c",
  storageBucket: "web-ai-2094c.appspot.com",
  messagingSenderId: "118262516963",
  appId: "1:118262516963:web:c66c3d5df03532483f09d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return app;
};
