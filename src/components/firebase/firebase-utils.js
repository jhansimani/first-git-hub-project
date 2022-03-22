import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDoc, getFirestore, doc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDbvzK_cnWk-9WpefF10Bn9SK9ix3gnTTk",
  authDomain: "crown-clothing-b17d2.firebaseapp.com",
  projectId: "crown-clothing-b17d2",
  storageBucket: "crown-clothing-b17d2.appspot.com",
  messagingSenderId: "163966148347",
  appId: "1:163966148347:web:d82d5e1eece7c329309a5e",
  measurementId: "G-TPXZX75T7T",
};

const firebaseApp = initializeApp(firebaseConfig);

/* this gives access to google provider from authentication library*/
const provider = new GoogleAuthProvider();

/* it takes a custom paramentrers */
provider.setCustomParameters({ prompt: "select_account" });

/* it means we always trigger a google popup whenever we use google auth provider  for authentication and signin*/

export const auth = getAuth();
console.log(auth);
// export const signInWithGooglePop = () => signInWithRedirect(auth, provider);
const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userRefSnap = (await getDoc(userDocRef)).exists();
  if (!userRefSnap) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log(error);
      // throw new Error(error);
    }
  }
  return userDocRef;
};
export const createAuthUserWithEmailandPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailandPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
