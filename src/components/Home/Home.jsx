import { useState } from 'react'
import LoginForm from '../LoginForm/LoginForm'
import RegisterForm from '../RegisterForm/RegisterForm'
import { Link } from 'react-router-dom'

const Home = () => {
    const [ boolean, setBoolean ] = useState(false)

    const handleClick = () => {
        if(boolean) {
            setBoolean(false)
        } else {
            setBoolean(true)
        }
    }

    return(
        <>  
            {
                boolean
                    ? <LoginForm />
                    : <RegisterForm />
            }
            <Link 
                to="/" 
                onClick={handleClick}
            >
                { boolean
                    ? "Regístrate"
                    : "Login" 
                }
            </Link>
        </>
    )
}

export default Home