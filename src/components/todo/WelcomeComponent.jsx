import {useParams,Link } from 'react-router-dom';
import { useState } from 'react';
import {retrieveHelloWorldBean, retrieveHelloWordPathVariable} from './api/HelloWorldApi'
import { useAuth } from './security/AuthContext';


function WelcomeComponent(){
    const {username } = useParams()
    const [message, setMessage]= useState()
    const AuthContext = useAuth()

    function callHelloWorldRestApi(){
        // axios.get('http://localhost:8080/hello-world')
        // .then ( (response) => successfulResponse(response) )
        // .catch( (error) => errorResponse(error))
        // .finally(() => console.log('cleanup'))

        //retrieveHelloWorldBean()
        retrieveHelloWordPathVariable('Aadi', AuthContext.token )
        .then ( (response) => successfulResponse(response) )
        .catch( (error) => errorResponse(error))
        .finally(() => console.log('cleanup'))
     }
     
     function successfulResponse(response){
        setMessage(response.data.message)
         console.log(response)
     }
     function errorResponse(error){
         console.log(error)
     }
     
    

    return (
        <div className='WelcomeComponent'>
        <h1>Welcome to {username}</h1>
        <div>
            Your todos <Link to="/todos">Go here</Link>
        </div>
        <div>
            <button className='btn btn-success' onClick={callHelloWorldRestApi}>call hello world</button>
        </div>
        <div className="text-info">{message}</div>
        </div>
    )
}

export default WelcomeComponent