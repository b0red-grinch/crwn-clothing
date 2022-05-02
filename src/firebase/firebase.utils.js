import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDoc, setDoc, addDoc, onSnapshot, doc } from 'firebase/firestore';



//initialize firebase app
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

//initialize database
const db = getFirestore();

//export sign in with email and password


//create an instance, and authenticating using Google provider object
const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' });
export const auth = getAuth();
export const signInPopUp = () => (signInWithPopup(auth, provider));
//  .then((result)=>{
//    const user = result.user;
//    console.log(user)
//  })
//  .catch((error) => {
//    const errorCode = error.code;
//    const errorMessage = error.message;
//    console.log(errorCode, errorMessage);
//  });


//Query to read doc from database

//store user into database
export const createUserProfileDocument = async (authUser, additionalData) => {
  if (!authUser) return;
  
  const docRef = doc(db, 'users', authUser.uid);

  const docSnap = await getDoc(docRef);
 
  if (!docSnap.exists()) {
    const { displayName, email } =  authUser;
    const createdAt = new Date();


    try {
      await setDoc(docRef, {
        displayName,
        email,
        createdAt, 
        ...additionalData
        }
      )
    


    } catch (error) {
      console.log('An error occured', error.message)
    }    
  }
  return docRef;
  
};



 
  
