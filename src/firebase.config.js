// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5veH2IAXa8s3xK5htpagsrKdTKp1qz0w",
  authDomain: "house-marketplace-app-b958c.firebaseapp.com",
  projectId: "house-marketplace-app-b958c",
  storageBucket: "house-marketplace-app-b958c.appspot.com",
  messagingSenderId: "597905716493",
  appId: "1:597905716493:web:eccbe91de792083f476c44",
  measurementId: "G-SF5WFTB951"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore()