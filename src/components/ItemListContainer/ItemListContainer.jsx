import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { db } from "../../utils/firebase"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { Box, Typography } from "@mui/material"

export const ItemListContainer = () => {
    const { categoria } = useParams()
    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(true)


    useEffect(()=>{
        const prodsRef = collection(db, "productos")
        const prod = []
        getDocs(prodsRef)
            .then((docs) => {
                docs.forEach((doc) => {
                    prod.push(
                        {
                            ...doc.data(),
                            id: doc.id
                        }
                        )
                    })
                })
                .then(()=>{
                if(categoria){
                    const filteredByCategory = prod.filter((doc)=> doc.categoria === categoria)
                    setProducts(filteredByCategory)
                } else {
                    setProducts(prod)
                }
                setLoading(false)
            })
            .catch((error)=> console.log(error))
    }, [categoria])

    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 4,
                p: 4,
                justifyContent: "center"              
            }}
        >
            {
                loading
                ? <Typography variant="h4" sx={{mx:"auto", mt:6}}>Cargando...</Typography>
                : products.map(prod => 
                    <ItemList 
                        key={prod.id}
                        category={prod.categoria}
                        stock={prod.stock}
                        price={prod.precio} 
                        title={prod.titulo}
                        artist={prod.artista}
                        description={prod.descripcion}
                        image={prod.imagen}
                        id={prod.id}
                    />
                )
            }
        </Box>
    )
}

