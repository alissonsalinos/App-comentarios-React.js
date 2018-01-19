import Rebase from 're-base'
import firebase from 'firebase'


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCY3G7_P5JS_pKBzV-EhtQEhw4W7bi7k18",
    authDomain: "reatjs-56365.firebaseapp.com",
    databaseURL: "https://reatjs-56365.firebaseio.com",
    projectId: "reatjs-56365",
    storageBucket: "reatjs-56365.appspot.com",
    messagingSenderId: "485960763579"
})
const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers = {
    'facebook': new firebase.auth.FacebookAuthProvider()
}


export const auth = firebaseApp.auth()
export default base


