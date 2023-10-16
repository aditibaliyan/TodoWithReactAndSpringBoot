import { ApiClient } from "./ApiClient"
export const ExecuteBasicAuthService = 
       (token) => ApiClient.get(`/basicauth`,{
            headers: {
                Authorization: token
            }
 })



export const ExecuteJwtAuthService = 
       (username, password, token) => ApiClient.post(`/authenticate`,{
        headers: {
            Authorization: token
        },
        username, password} )

// export const ExecuteJwtAuthService = 
//         (username, password) => ApiClient.post(`/authenticate`,{
         
//          username, password} )