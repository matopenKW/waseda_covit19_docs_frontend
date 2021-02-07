import firebase from '~/plugins/firebase'

export default async function ({ store, redirect }) {
    var user = firebase.auth().currentUser
    if (!user) {
        redirect("/")
    }
}