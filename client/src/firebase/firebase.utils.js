import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDoc, setDoc, doc, writeBatch} from 'firebase/firestore';




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

export const app = initializeApp(config);

//initialize database
export const db = getFirestore();

//export sign in with email and password

//create an instance, and authenticating using Google provider object
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
export const signInPopUp = () => (signInWithPopup(auth, googleProvider));
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


//retreiving shop data from firebase, trimming down collections snapshot to relevant objects 
export const convertCollectionsSnapshotToMap = (collectionSnapshot) => {
  const transformedSnapshot = collectionSnapshot.docs.map(doc => {
    const { title, items } = doc.data();
    return (
      {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title, 
        items
      }
    )
  });

  return transformedSnapshot.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
    }, {});
};

//store collections into firebase
export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
  console.log("collections: ", objectsToAdd);
  const collectionRef = collection(db, collectionKey); 
  console.log("collectionRef", collectionRef);

  const batch = writeBatch(db);
  objectsToAdd.forEach((obj) => {
    const docRef = doc(collectionRef);
    console.log("doc Ref: ", docRef);

    batch.set(docRef, obj);
  });

  return await batch.commit();

};



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
  
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  })
}