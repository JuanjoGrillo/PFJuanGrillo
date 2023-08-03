import { db } from "../../utils/firebase.js"
import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail.jsx"
import { Typography } from "@mui/material"

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [ product, setProduct ] = useState([])
    const [ loading, setLoading ] = useState(true)

    
    useEffect(()=>{
        const prodRef = doc(db, 'productos', id)
        let prod 
        let prodId
        getDoc(prodRef)
            .then((doc) => {
                prod = doc.data()
                prodId = doc.id
            })
            .then(()=>{
                setProduct(
                    {
                        ...prod,
                        id: prodId                        
                    }
                )
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    
    return(
        <>
            {
                loading
                    ? <Typography variant="h4" sx={{mx:"auto", mt:6}}>Cargando...</Typography>
                    : <ItemDetail 
                        title={product.titulo}
                        price={product.precio}
                        image={product.imagen}
                        artist={product.artista}
                        description={product.descripcion}
                        stock={product.stock}
                        category={product.categoria}
                        id={product.id}
                    />
            }    
        </>
    )
}