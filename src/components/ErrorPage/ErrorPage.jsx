import { Box, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"

export const ErrorPage = () => {
    
    return(
        <Box sx={{display: "flex", flexDirection: "column", ml: 6, my: 6}}>
                <Typography variant="h3" sx={{mt: 2}}>
                    Error 404 <Typography variant="subititle1">pagina no encontrada</Typography>
                </Typography>
                <Typography variant="h6">
                    Parece que ha habido algun tipo de error.<br/>
                    Por favor regrese a la <NavLink to="/registro" replace={true}>página principal</NavLink>
                </Typography>            
        </Box>
    )
}

