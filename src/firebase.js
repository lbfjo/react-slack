import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBSeXPCbCYPHQ-dnPhkrwaG4j5PpziSCzQ',
  authDomain: 'slack-react-307112.firebaseapp.com',
  projectId: 'slack-react-307112',
  storageBucket: 'slack-react-307112.appspot.com',
  messagingSenderId: '619398133683',
  appId: '1:619398133683:web:fb88f269316ff1f534bdc6',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, db, provider }
