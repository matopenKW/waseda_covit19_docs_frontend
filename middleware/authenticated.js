import firebase from '~/plugins/firebase'

export default function ({ store, redirect }) {
    const token = store.state.token
    if (!token){
        redirect("/")
    }
    // firebase.auth().onAuthStateChanged((user) => {
    //     if (!store.getters.isAuthenticated) {
    //         redirect("/")
    //     }
    // })
}