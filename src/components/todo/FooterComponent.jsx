import { AuthContext, useAuth } from "./security/AuthContext"
import { useContext } from "react"
function FooterComponent(){
    const authContext= useAuth()
    
    return (
        
        <footer className="FooterComponent">
        <div className='Conteiner'>
         Footer
        </div>
        </footer>
    )
}

export default FooterComponent