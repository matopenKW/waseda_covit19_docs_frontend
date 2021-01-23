import firebase from 'firebase';

if (!firebase.apps.length) {
    firebase.initializeApp({
        baseUrl: "//localhost:3000",
        apiKey: "AIzaSyCEva2RHNXoQuiybY1OnN0rMTbZ3vYw-OY",
        authDomain: "waseda-covite19-docs.firebaseapp.com",
        projectId: "waseda-covite19-docs",
        storageBucket: "waseda-covite19-docs.appspot.com",
        messagingSenderId: "411783997613",
        appId: "1:411783997613:web:0c2a91df34cab0bfcb7e24",
        measurementId: "G-VRK8088N7M"
    })
}

export const auth = firebase.auth
export default firebase