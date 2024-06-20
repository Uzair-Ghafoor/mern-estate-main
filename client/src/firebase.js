// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'mern-estate-c09d5.firebaseapp.com',
  projectId: 'mern-estate-c09d5',
  storageBucket: 'mern-estate-c09d5.appspot.com',
  messagingSenderId: '964904338686',
  appId: '1:964904338686:web:d670e992ea6a5116fed1af',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
