import { collection, addDoc } from "firebase/firestore"
import { db } from "./firebase"

export const updateCart = (items) => {
    localStorage.setItem("cart", JSON.stringify(items))
}

export const emptyCart = () => {
    localStorage.setItem("cart", JSON.stringify([]))
}

const addPrices = (items) => {
    return items.reduce((acc, cv)=>acc + cv.precio * cv.cantidad, 0)
}

export const generateTicket = (items, user) => {
    const ordersRef = collection(db, "pedidos")
    const ticket = {
        articulosVendidos: items,
        comprador: user.uid,
        precioFinal: addPrices(items)
    }
    addDoc(ordersRef, ticket)
    .then((orderRef)=>{
        console.log(orderRef)
        emptyCart()
        setItems([])
    })
    .catch((error)=>{
        console.log("error: "+error)
    })
}