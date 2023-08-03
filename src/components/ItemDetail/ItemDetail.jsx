import { Box, Button, ButtonGroup, Container, Paper, Stack, Typography } from "@mui/material"
import { useState, useContext, useEffect } from "react"
import { ContextCart } from "../../context/CartContext"

export const ItemDetail = ({ title, price, image, artist, description, stock, category, id }) => {
    
    const [ cantidad, setCantidad ] = useState(0)
    const [ inCart, setInCart ] = useState(false)
    const { items, setItems } = useContext(ContextCart) 
    
    useEffect(() => {
        items.map((item) => {
            if(item.id === id){
                setInCart(true)
            }
        })
    },[])

    const handleAddUnit = () => {
        cantidad < stock && setCantidad(cantidad + 1)
    }
    const handleSusUnit = () => {
        cantidad > 0 && setCantidad(cantidad - 1)
    }
    const handleAddToCart= (e) => {
        e.preventDefault()
        const newItems = [...items, {id: id, cantidad: cantidad, precio: price, artista: artist}]
        setItems(newItems)
        setInCart(true)
        setCantidad(0)
    }
    const handleRemoveFromCart = () => {
        console.log(items)
        const newItems = items.filter((item) => item.id !== id)
        setItems(newItems)
        setInCart(false)
    }

    return(
        <Container
        disableGutters
        maxWidth= {false}
        sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                bgcolor: "#FFFFFF",
            }}
            >
            <Paper
                elevation={6}
                sx={{
                    bgcolor: "#111124",
                    mx: "auto",
                    display: "flex",
                }}
                >
                <Box 
                    component="div" 
                    sx={{
                        backgroundImage: "url('/public/img.jpg')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: '385px',
                        width: '385px',
                        
                    }}
                    />
                <Stack
                    sx={{
                        width: "500px",
                        p: 2,
                        color:"#FFFFFF",
                    }}
                    >    
                    <Box
                        sx={{
                            mb: "auto"
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                textAlign: "center",
                                mb: 4
                            }}
                        >
                            {title}
                        </Typography>
                        <Typography>
                        Artista: <span style={{fontWeight: "bolder"}}>{artist}</span>
                        </Typography>
                        <Typography>
                            Categoria: <span style={{fontWeight: "bolder"}}>{category}</span>
                        </Typography>
                        <Typography>
                        Stock disponible: <span style={{fontWeight: "bolder"}}>{stock}</span>
                        </Typography>
                        <Typography>
                            {description}
                        </Typography>
                    </Box>
                    <Box
                        onSubmit={handleAddToCart}
                        component="form"
                        direction="row"
                        justifyContent="space-around"
                        sx={{
                            mb: 4
                        }}
                        >
                        {
                            inCart
                                ? <Button variant="outlined" onClick={handleRemoveFromCart}>Quitar del carrito</Button> 
                                : <>
                                <ButtonGroup
                                direction="row"
                                sx={{
                                }}
                            >
                                <Button
                                    onClick={handleAddUnit}
                                >
                                    +
                                </Button>
                                <Button>
                                    {cantidad}
                                </Button>
                                <Button
                                    onClick={handleSusUnit}
                                >
                                    -
                                </Button>
                            </ButtonGroup>
                            <Button
                                type="submit"
                            >
                                Añadir al carrito
                            </Button> 
                        </> 
                        }
                        
                    </Box>
                </Stack>
            </Paper>
        </Container>
    )
}
