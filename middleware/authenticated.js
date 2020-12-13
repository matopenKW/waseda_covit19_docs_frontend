import firebase from '~/plugins/firebase'

export default function ({ route, store, redirect }) {
    firebase.auth().onAuthStateChanged((user) => {
        if (!store.getters.isAuthenticated) {
            redirect("/")
        }
    })
}