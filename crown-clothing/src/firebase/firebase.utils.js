import firebase from "firebase/app"

import "firebase/firestore"

import "firebase/auth"

const config = {
    apiKey: "AIzaSyAid9nEPkWWEDVNQVE_Opd_cDy4xy0QkJk",
    authDomain: "crowndb-ec990.firebaseapp.com",
    databaseURL: "https://crowndb-ec990.firebaseio.com",
    projectId: "crowndb-ec990",
    storageBucket: "crowndb-ec990.appspot.com",
    messagingSenderId: "641802656449",
    appId: "1:641802656449:web:55461f5809288e0985d240"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
