import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
   apiKey: "AIzaSyB-j1DiItYhgf-mBCZZ74hGyhGgxgdmTi8",
  authDomain: "clone-9601c.firebaseapp.com",
  projectId: "clone-9601c",
  storageBucket: "clone-9601c.appspot.com",
  messagingSenderId: "623146386007",
  appId: "1:623146386007:web:6c13b9658d241b497e1912",
  measurementId: "G-ZLJP2VC0TP"
}

firebase.initializeApp(firebaseConfig)

export default firebase.auth()