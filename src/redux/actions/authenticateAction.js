const login = (id, password) => {
    return (dispatch, getState) => {
        alert("로그인 되었습니다.")
        dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } })
    }
}

export const authenticateAction = { login }