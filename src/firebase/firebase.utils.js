import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCjgICw-mSA_pI71Mq7wOjOu1mxF2gI3W4",
  authDomain: "reactclothing-b9f75.firebaseapp.com",
  projectId: "reactclothing-b9f75",
  storageBucket: "reactclothing-b9f75.appspot.com",
  messagingSenderId: "994451059514",
  appId: "1:994451059514:web:94a640278616af1701d603",
  measurementId: "G-FV110G0L0D"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapShot = await userRef.get();

  console.log(snapShot);

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email, createdAt,
        ...additionalData

      })
    }catch(error){
      console.log("error", error.message);

    }
  }

  return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;