
export const state = () => ({
    token: '',
})

export const actions = {
}

export const mutations = {
    setToken: (state, token) => {
        state.token = token
    }
}

export const getters = {
    getToken: state => {
        return state.token
    }
}
