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
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(function(res) {
            const token = res.user.getIdToken()
            this.$cookies.set('jwt', token)
            commit('mutateToken', token)
            this.app.router.push('/mock2')
        }).catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
  
            if (errorCode === 'auth/invalid-email') {
            alert('メールアドレスの形式が不正です。');
  
            } else if (errorCode === 'auth/wrong-password') {
            alert('パスワードが間違っている又は不正な形式です。');
  
            } else if (errorCode === 'auth/user-not-found') {
            alert('存在しないユーザー又は削除された可能性があります。');
  
            } else if (errorCode === 'auth/email-already-in-use'){
            alert('既に登録してあるメールアドレスです。');
  
            } else if (errorCode === 'auth/weak-password') {
            alert('パスワードは６桁以上で登録してください。');
  
            } else {
            alert(errorMessage);
            }
            console.log(error);
          });
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
