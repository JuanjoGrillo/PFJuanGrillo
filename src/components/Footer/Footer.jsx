import { Container, Typography } from "@mui/material"

export const Footer = () => {
    return(
        <Container
            disableGutters
            maxWidth={false}
            sx={{
                bgcolor: "#2A3439",
                width: "inherit",
                height: "auto"
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    textAlign: "center"
                }}
            >
                Esto es un footer
            </Typography>
        </Container>
    )
}