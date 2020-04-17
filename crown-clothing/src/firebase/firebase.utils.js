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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return


    // console.log(firestore.doc(`users/131ijrn32jirn`))

    console.log(userAuth.uid)

    //doing a .doc on firestore returns object that then is used for crud operations
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    //queries the database with userRef.get(). 
    // this returns an object with a field called exist that we use later on. 
    const snapShot = await userRef.get()

    //is the user does not exixst in the database then 
    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        //try catch because this is a promise. 
        try {
            //await because is asyncronos, and we use the userRef object to no create an entry in the database
            // with .set
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {
            console.log("error creating user", error)
        }
    }

    // returns the user in case you wasnt to use later for other operations
    return userRef

}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
