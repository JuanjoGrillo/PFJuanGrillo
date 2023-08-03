import { Outlet, useNavigate } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { Container } from "@mui/material"
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
        <Container
            disableGutters
            maxWidth={false}
            sx={{
                mx: 0,
                width: "autp",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                flexGrow: 1
            }}
        >
            <NavBar />
            <Outlet />
            <Footer />
        </Container>
    )
}

export default Layout