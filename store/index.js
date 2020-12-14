import firebase from '~/plugins/firebase'

export const state = () => ({
 user: {
   uid: '',
   email: '',
   login: false,
 },
})

export const getters = {
    user: state => {
        return state.user
    },
    isAuthenticated: state => {
        return state.user.login
    },
}

export const actions = {
    login({ dispatch }, payload) {
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
    .then(user => {
        console.log('login')
        dispatch('checkLogin')
    }).catch((error) => {
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
        })
    },
    checkLogin ({ commit }) {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                commit('getData', { uid: user.uid, email: user.email })
                commit('switchLogin')
            }
        })
    }
}

export const mutations = {
    getData (state, payload) {
        state.user.uid = payload.uid
        state.user.email = payload.email
    },
    switchLogin (state) {
        state.user.login = true
    },
}