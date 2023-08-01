import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAr5sOKWI1CCLSZvvmSKXBrsxkh7O7DMps",
  authDomain: "fir-course-44bfd.firebaseapp.com",
  projectId: "fir-course-44bfd",
  storageBucket: "fir-course-44bfd.appspot.com",
  messagingSenderId: "789841147253",
  appId: "1:789841147253:web:bde8e45e78b26b96bc0f3c",
  measurementId: "G-B987H4WHTS",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
