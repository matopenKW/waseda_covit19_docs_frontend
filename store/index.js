import firebase from "~/plugins/firebase";


export const stete = () => ({
    token: '',
})

export const actions = {
}

export const mutations = {
}

export const getters = {
    isLoggedIn(state){
        return !!state.token
    }
}
