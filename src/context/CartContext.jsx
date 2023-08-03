import { createContext, useState } from "react"

export const ContextCart = createContext()

export const CartContext = ({children}) => {

    const [ items, setItems ] = useState([])

    const values = {
        items: items,
        setItems: setItems
    }

    return(
        <ContextCart.Provider value={values}>
            {children}    
        </ContextCart.Provider>
    )
}
