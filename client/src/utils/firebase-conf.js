import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCBH5fk_9HJJ7texJOeETvY-3io9lA3hzQ",
  authDomain: "movieflix-cbd93.firebaseapp.com",
  projectId: "movieflix-cbd93",
  storageBucket: "movieflix-cbd93.appspot.com",
  messagingSenderId: "485018141952",
  appId: "1:485018141952:web:3ba71311fb4b2bc46b5fe5",
  measurementId: "G-MXP5DSFKHV"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);