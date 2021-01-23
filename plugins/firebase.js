import firebase from 'firebase';

if (!firebase.apps.length) {
    firebase.initializeApp({
        baseUrl: "//localhost:3000",
        apiKey: "AIzaSyAxvcPVllD-sHzf0jm9StoQkmnWsya2RK4",
        authDomain: "waseda-covit19-docs-ef204.firebaseapp.com",
        projectId: "waseda-covit19-docs-ef204",
        storageBucket: "waseda-covit19-docs-ef204.appspot.com",
        messagingSenderId: "1068782021028",
        appId: "1:1068782021028:web:9627401729351c458d7931",
        measurementId: "G-DP1MTP908T"
    })
}

export const auth = firebase.auth
export default firebase