import api from "."

export const login = (loginData: any) => {
    return api.post('/user/login', loginData)
}