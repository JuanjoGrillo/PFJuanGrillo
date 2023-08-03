import { Outlet, useNavigate } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { Box, Container, Typography } from "@mui/material"
import { Footer } from "../Footer/Footer"

const Layout = () => {
    const currentPath = useLocation().pathname
    const navigate = useNavigate();

    useEffect(() => {
        if(currentPath === '/') {
            navigate("/registro");
        }    
    }, [])
    
    return(
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: 1,
                m:0,
                p:0,
                width:"100%",
                minHeight: "100vh"
                
            }}
        >
            <NavBar />
            <Box
                sx={{
                    display: "flex",
                    flexGrow: 1
                }}
            >
            {
                (currentPath === "/login" || currentPath === "/registro")
                &&
                <Box
                sx={{
                    backgroundColor: "#FFFFFF",
                    flexGrow: 1,
                    width: "50%"

                }}
                >

                    <Typography
                        variant="h1"
                        sx={{
                            textAlign: "left",
                            mt: 6,
                            ml: 4
                    
                        }}
                    >
                        La Disqueria
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            textAlign: "left",
                            mt: 6,
                            ml: 4
                        }}
                    >
                        Bienvenido a la mejor app para comprar tu música favorita, en la mejor version vintage.    
                    </Typography>
                </Box>
            }
                <Outlet />
            </Box>
            <Footer />
        </Box>        
    )
}

export default Layout