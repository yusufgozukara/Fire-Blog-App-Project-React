import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase } from "firebase/database";
// import {firebase} from './firebase'

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, navigate, displayName) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // await updateProfile(auth.currentUser, {
    //     displayName: {email},
    //     //  photoURL: "https://example.com/jane-q-user/profile.jpg"
    //   })
    navigate('/')
    console.log(displayName);
  } catch (error) {
    console.log(error);
  }
};

export const signIn = async (email, password, navigate) => {
    try {
        let userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          navigate('/')
          console.log(userCredential);
    } catch (error) {
        console.log(error);
    }
}

export const userObserver = (setCurrentUser) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
 
          setCurrentUser(user)
        } else {
          // User is signed out
          setCurrentUser(false)
        }
      });
}

export const logOut = () => {
    signOut(auth);
}

export const signUpProvider = (navigate) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result)
    navigate('/')
  }).catch((error) => {
    console.log(error)
  });
}


export const AddBlog = () => {

  const db = getDatabase(firebase);
  const userRef= ref(db,'users/')
  const newUserRef=push(userRef)

}