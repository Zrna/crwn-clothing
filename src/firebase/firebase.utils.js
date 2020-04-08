import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBXLL9tnIgKlDv--ATBilrDzrL_C20DKSg',
  authDomain: 'crwn-db-83d57.firebaseapp.com',
  databaseURL: 'https://crwn-db-83d57.firebaseio.com',
  projectId: 'crwn-db-83d57',
  storageBucket: 'crwn-db-83d57.appspot.com',
  messagingSenderId: '242478824400',
  appId: '1:242478824400:web:904c7e1f88fe040c3d57d5'
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (e) {
      console.log('Error creating user', e.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
