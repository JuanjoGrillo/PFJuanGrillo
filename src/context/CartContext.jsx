import { createContext, useState, useEffect } from "react"

export const ContextCart = createContext()

export const CartContext = ({children}) => {

    const [ items, setItems ] = useState([])

    useEffect(()=>{
        if(JSON.parse(localStorage.getItem("cart")) === null){
            localStorage.setItem("cart", JSON.stringify([]))
        } else {
            if(JSON.parse(localStorage.getItem("cart")).length === 0){
                setItems(JSON.parse(localStorage.getItem("cart")))
            } 
            else {
                localStorage.setItem("cart", JSON.stringify([]))
            }
        }
    }, [])


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
