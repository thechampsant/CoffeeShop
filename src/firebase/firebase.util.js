import firebase from 'firebase/compat/app';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from "firebase/auth";
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBMqONK53U-usSrNCrVqGeBgAWyGS9hLro",
    authDomain: "coffeeshop-850b4.firebaseapp.com",
    projectId: "coffeeshop-850b4",
    storageBucket: "coffeeshop-850b4.appspot.com",
    messagingSenderId: "741448819053",
    appId: "1:741448819053:web:752990b6b00364a089fa64",
    measurementId: "G-F32SPJ702F"
  };

firebase.initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
})

const auth = getAuth();
export const singInWithGoogle = async() => await signInWithPopup(auth, provider)

 
 

