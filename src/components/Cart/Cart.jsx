import { Box, Button, Container, Stack, Typography } from "@mui/material"
import { useContext } from "react"
import { ContextCart } from "../../context/CartContext"
import { NavLink } from "react-router-dom"
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";

const Cart = () => {
    const { items, setItems } = useContext(ContextCart)

    const addPrices = () => {
        return items.reduce((acc, cv)=>acc + cv.precio * cv.cantidad, 0)
    }

    const handleClick = async () =>{
        for(let item of items) {
            const docRef = doc(db, "productos", item.id)
            const operation = await getDoc(docRef)
            .then((doc)=>{
                console.log("antes"+doc.data().stock)
                const newStock = doc.data().stock - item.cantidad
                updateDoc(docRef, {
                    stock: newStock
                }).then(()=>{
                    getDoc(docRef)
                    .then((doc)=>{
                        console.log("despues"+doc.data().stock)
                        const precioFinal = addPrices()
                        console.log("Gracias por tu compra! te salio unos "+precioFinal)
                        setItems([])
                    })
                })
            })
        }
    }

    return(
        <Container
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
                        ? 
                        <div>
                            <span>No has añadido ningun producto aun</span>
                            <NavLink to={"/tienda"} replace={true}>Vuelve a la tienda</NavLink>
                        </div>
                        : 
                        <Box>
                        {items.map(
                            (item) => {
                                return <Box
                                    key={item.id}
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
                        >
                            Finalizar compra
                        </Button>
                    </Box>
                    }
                </Stack>
            </Container>    
    )
}

export default Cart