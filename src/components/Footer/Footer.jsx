import { Container, Typography } from "@mui/material"
import { useContext } from "react"
import { ContextCart } from "../../context/CartContext"

export const Footer = () => {

    return(
        <Container
            disableGutters
            maxWidth={false}
            sx={{
                color: "white",
                bgcolor: "secondary.main",
                width: "inherit",
                height: "auto"
            }}
        >
            <Typography
                variant="subtitle1"
                sx={{
                    textAlign: "left",
                    lineHeight: "40px",
                    height: "40px"
                }}
            >
                Aplicación web @curso/react.js
            </Typography>
        </Container>
    )
}