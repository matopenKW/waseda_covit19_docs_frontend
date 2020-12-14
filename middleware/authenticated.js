import firebase from '~/plugins/firebase'

export default function ({ store, redirect }) {
    const user = store.state.user
    if (!user){
        redirect("/")
    }
    // firebase.auth().onAuthStateChanged((user) => {
    //     if (!store.getters.isAuthenticated) {
    //         redirect("/")
    //     }
    // })
}