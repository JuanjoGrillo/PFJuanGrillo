import { useContext } from "react"
import { Context } from "../../context/AuthContext"
import { signOut } from "firebase/auth"
import { auth } from "../../utils/firebase.js"

const NavBar = () => {
    const { user } = useContext(Context)

    const handleSignOut = () => {
        signOut(auth)
            .then(()=>{
                console.log("sign out")
            })
            .catch((error)=> {
                console.log(error)
            })
    }

    return(
        <header>
            <div> 
                {   user
                    ? user.displayName
                    : "Anónimo"
                }    
            </div> 
            { user && <button onClick={handleSignOut}>Salir</button> }
        </header>
    )
}

export default NavBar