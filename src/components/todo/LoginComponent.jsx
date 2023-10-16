import {useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { useAuth } from './security/AuthContext';

function LoginComponent(){
    const [userName, setUserName] = useState("in28minutes");
    const [password, setPassword] = useState();
    const [showFailureMsg, setshowFailureMsg] = useState(false);
    const navigate = useNavigate();
    const authContext= useAuth()

    function handleUserName(event){
        setUserName(event.target.value)
    }
    function handlePassword(event){
        setPassword(event.target.value)
    }
    async function handleSubmit(){
        if(await authContext.login(userName, password)){
           navigate(`/welcome/${userName}`)
        }else{
            setshowFailureMsg(true)
        }
    }
    

    return(
        <div className="Login"> 
           <h1>Time to login!</h1>
          {showFailureMsg && <div className='failureMsg'>Authentication failed</div>}
          <div className="LoginForm">
            <div>
                <label>Username</label>
                <input type="text" name="username" value={userName} onChange={handleUserName}/>
            </div>
            <div>
                <label>password</label>
                <input type="password" name="password" value={password} onChange={handlePassword}/>
            </div>
            <div>
                <button type="button" name="login" onClick={handleSubmit}>Login</button>
            </div>
          </div>
        </div>
    )
}

export default LoginComponent