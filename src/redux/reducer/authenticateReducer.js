const initialState = {
    id: '',
    password: '',
    authenticate: false
}

function authenticateReducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return { ...state, id: action.payload.id, password: action.payload.password, authenticate: true }
        case "LOGOUT_SUCCESS":
            return { ...state, id: '', password: '', authenticate: false }
        default:
            return state
    }
}

export default authenticateReducer