import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
    Box
} from "@mui/material"
import { useNavigate } from "react-router-dom"

export const ItemList = () => {
    const navigate = useNavigate()

    const handleClickEvent = () => {
        navigate("rock/1234")
    }   

    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="../../public/img.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
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
                        Stock disponible 30
                    </Typography>
                    <Button 
                        variant="outlined"
                        size="small"
                        sx={{
                            mr: 2,
                            mb: 1
                        }}
                        onClick={handleClickEvent}
                    >
                        Detalle
                    </Button>
                </Box>
            </CardActions>
        </Card>
    )
}