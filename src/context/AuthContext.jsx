import { createContext, useState, useEffect } from "react"
import { auth } from "../utils/firebase.js"
import { onAuthStateChanged } from "firebase/auth"

export const ContextAuth = createContext()

export const AuthContext = ({ children }) => {

    const [ user, setUser ] = useState()
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            currentUser 
                ? setUser(currentUser)
                : setUser(null)
        })
        return () => {
            unsubscribe && unsubscribe()
        }
    }, [])
    
    const values = {
        user: user,
        setUser: setUser
    }


    return <ContextAuth.Provider value={values}>
        {!loading && children}
    </ContextAuth.Provider>
}