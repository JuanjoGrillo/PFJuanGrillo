import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
    Box
} from "@mui/material"
import { NavLink, useParams } from "react-router-dom"
import { ContextAuth } from "../../context/AuthContext"
import { useContext } from "react"

export const ItemList = ({ category, stock, price, title, artist, description, image, id }) => {
    const {categoria} = useParams()
    const { user } = useContext(ContextAuth)
    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="../../public/img.jpg"
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Box
                    sx={{
                        flexGrow: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            ml:1,
                            mb: 1
                        }}
                    >
                        Stock disponible: <span style={{fontWeight: "bolder"}}>{stock}</span>
                    </Typography>
                    {   
                        user
                        && <Button 
                            variant="outlined"
                            size="small"
                            sx={{
                                mr: 2,
                                mb: 1
                            }}
                            >        
                            <NavLink
                                to={categoria ? `${id}` : `${category}}/${id}`}
                            >
                                Ver en detalle
                            </NavLink>                
                            </Button>
                    }
                </Box>
            </CardActions>
        </Card>
    )
}