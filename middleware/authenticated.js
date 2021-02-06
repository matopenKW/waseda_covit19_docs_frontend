import firebase from '~/plugins/firebase'

export default function ({ store, redirect }) {
    const token = this.$cookies.get('jwt')
    alert(token)
    if (!token){
        redirect("/")
    }
    // firebase.auth().onAuthStateChanged((user) => {
    //     if (!store.getters.isAuthenticated) {
    //         redirect("/")
    //     }
    // })
}