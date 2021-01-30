export default ({app, store}) => {
    const token = app.$cookies.get('jwt')

    if (token) {
        store.dispatch('setToken', token)
    }
}