import { authenticateActions } from "../reducer/authenticateReducer"

const login = (id, password) => {
    return (dispatch, getState) => {
        alert("로그인 되었습니다.")
        dispatch(authenticateActions.login(id, password))
    }
}

export const authenticateAction = { login }