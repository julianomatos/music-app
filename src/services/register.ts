import api from "."

export const register = (loginData: any) => {
    return api.post('/user/register', loginData)
}