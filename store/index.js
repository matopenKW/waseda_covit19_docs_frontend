import firebase from "~/plugins/firebase";


export const stete = () => ({
    token: '',
})

export const actions = {
    async signUp({commit, dispatch}, payload) {
        await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        const res = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        const token = await res.user.getIdToken()
        this.$cookies.set('jwt', token)
        commit('mutateToken', token)
        this.app.router.push('/')
    },
    async login({commit, dispatch}, payload){
        const res = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        const token = await res.user.getIdToken()
        this.$cookies.set('jwt', token)
        commit('mutateToken', token)
        this.app.router.push('/mock2')
    },
    async setToken({commit}, payload){
        commit('mutateToken', token)
    }
}

export const mutations = {
    mutataToken(state, payload) {
        state.token = payload
    },
}

export const getters = {
    isLoggedIn(state){
        return !!state.token
    }
}
