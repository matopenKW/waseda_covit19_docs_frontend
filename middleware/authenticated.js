import firebase from '~/plugins/firebase'

export default async function ({ store, redirect }) {
    if (!store.getters.getToken) {
        redirect("/")
    }
}