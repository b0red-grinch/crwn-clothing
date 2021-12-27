import {getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
  
const config = {
    apiKey: "AIzaSyAPACQwkLYDOQuXLUVTYlf713lJizzn1nc",
  authDomain: "crown-db-179d8.firebaseapp.com",
  projectId: "crown-db-179d8",
  storageBucket: "crown-db-179d8.appspot.com",
  messagingSenderId: "1098129687717",
  appId: "1:1098129687717:web:cde51e5e1134cabb39394c",
  measurementId: "G-58Q6J6X6Q5"
};
const app = initializeApp(config);

//create an instance, and authenticating using Google provider object
const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' });
export const auth = getAuth();
export const signInPopUp = () => signInWithPopup(auth, provider)
//  .then((result)=>{
//    const user = result.user;
//    console.log(user)
//  })
//  .catch((error) => {
//    const errorCode = error.code;
//    const errorMessage = error.message;
//    console.log(errorCode, errorMessage);
//  });




 