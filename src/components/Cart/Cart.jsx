import { Box, Button, Container, Stack, Typography } from "@mui/material"
import { ContextCart } from "../../context/CartContext"
import { NavLink } from "react-router-dom"
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { Checkout } from "../Checkout/Checkout"
import { useState } from "react";
import { generateTicket, updateCart } from "../../utils/cart";
import { useContext } from "react";
import { ContextAuth } from "../../context/AuthContext";

export const Cart = () => {
    const { items, setItems } = useContext(ContextCart)
    const [ sold, setSold ] = useState(false)
    const { user } = useContext(ContextAuth)

    const handleClick = async () =>{
        const list = []
        for(let item of items) {
            const docRef = doc(db, "productos", item.id)
            const operation = await getDoc(docRef)
            .then((doc)=>{
                list.push({...doc.data(),cantidad:item.cantidad})
                const newStock = doc.data().stock - item.cantidad
                updateDoc(docRef, {
                    stock: newStock
                })
                .then(()=>{
                    setSold(true)
                    updateCart(list)
                    setItems(list)
                    generateTicket(list, user)
                })
            })
        }
    }

    return( 
        sold 
        ? <Checkout />
        : <Container
            disableGutters
            maxWidth={false}
            sx={{
                flexGrow: 1,
                bgcolor: "#FFFFFF",
                width: "inherit",
            }}
            >
            <Typography
                variant="h3"
                sx={{
                    textAlign: "left",
                    m: 4
                }}
            >
                Tus productos
            </Typography>
            <Stack>
                {
                items.length === 0
                    ? <Box sx={{
                        display: "flex"
                        }}>
                        <Typography variant="subtitle2" sx={{
                            ml: 4
                        }}>No has añadido ningun producto aun<NavLink to={"/tienda"} replace={true} style={{textDecoration: "none"} }> vuelve a la tienda</NavLink></Typography>
                        
                        </Box>
                        : <Box>
                            {items.map(
                                (item) => {
                                    return <Box
                                        key={item.id}
                                        sx={{ml:4}}
                                        >
                                            <Typography
                                                variant="h6"
                                            >
                                                Producto "Album"
                                            </Typography>
                                            <Typography
                                                variant="subtitle1"
                                            >
                                                Cantidad 13
                                            </Typography>
                                        </Box>
                                }
                            )}
                            <Button
                                variant="contained"
                                onClick={handleClick}
                                sx={{
                                    ml: 4
                                }}
                            >
                                Finalizar compra
                            </Button>
                        </Box>
                }
            </Stack>
        </Container>    
    )
}

