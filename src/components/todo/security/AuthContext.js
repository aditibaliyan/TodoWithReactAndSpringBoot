import {createContext} from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import {ExecuteBasicAuthService, ExecuteJwtAuthService} from '../api/ExecuteAuthService.js'
import { ApiClient } from '../api/ApiClient.js'

export const AuthContext = createContext()
export const useAuth= () => useContext(AuthContext)

// export default function AuthProvider( {children} ){
    
//     const [isAuthenticated, setAuthenticated] = useState(false)
//     const [username, setUserName] = useState(null)
//     const [token, setToken] = useState(null)

//     // function login(userName, password){
//     //   if(userName==="in28minutes" && password==="password"){
//     //     setUserName(userName)
//     //     setAuthenticated(true)
//     //     return true
//     //   }else{
//     //     setUserName(null)
//     //     setAuthenticated(false)
//     //     return false
//     //   }
//     // }

//     async function login(userName, password){

//       const batoken = 'Basic ' + window.btoa(userName + ':' +password)

//       const response = await ExecuteBasicAuthService(batoken)
//       try{
//          if(response.status ==200){
//              setUserName(userName)
//              setAuthenticated(true)
//              setToken(batoken)
//              ApiClient.interceptors.request.use(
//               config => {
//                 console.log('intercepting and adding a tocken')
//                 config.headers.Authorization= batoken
//                 return config
//               }

//              )
//              return true
//          }else{
//              logout()
//              return false
//          }
//         }catch{
//           logout()
//           return false

//         }
      
//       }
    

//     function logout(){
//       setUserName(null)
//           setAuthenticated(false)
//           setToken(null)
    
//     }

//     return(
//      <div>
//        <AuthContext.Provider value={ {isAuthenticated, login, logout, username, token}}>
//         {children}
//        </AuthContext.Provider>
//      </div>
//     )
// }




export default function AuthProvider( {children} ){
    
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [username, setUserName] = useState(null)
  const [token, setToken] = useState(null)


  async function login(userName, password){
    const batoken = 'Basic ' + window.btoa(userName + ':' +password)

    const response = await ExecuteJwtAuthService(userName, password,batoken)
    try{
       if(response.status ==200){
        const jwtToken = 'Bearer ' + response.data.token 
           setUserName(userName)
           setAuthenticated(true)
           setToken(jwtToken)
           ApiClient.interceptors.request.use(
            config => {
              console.log('intercepting and adding a tocken')
              config.headers.Authorization= jwtToken
              return config
            }

           )
           return true
       }else{
           logout()
           return false
       }
      }catch{
        logout()
        return false

      }
    
    }
  

  function logout(){
    setUserName(null)
        setAuthenticated(false)
        setToken(null)
  
  }

  return(
   <div>
     <AuthContext.Provider value={ {isAuthenticated, login, logout, username, token}}>
      {children}
     </AuthContext.Provider>
   </div>
  )
}





