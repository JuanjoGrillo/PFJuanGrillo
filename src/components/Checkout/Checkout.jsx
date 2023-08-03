import { Box, Button, Fade, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate()

    const handleOpen = () => {
        setOpen(true)
    }    
    
    const handleClose = () => {
        navigate(0)
    }
    

    return(
        <>
        <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        >
        <Fade in={open}>
          <Box
          sx={{
            flexGrow: 1,
            backgroundColor: "#FFFFFF",
            width: "40%",
            mx: "auto",
            my: "200px",
            textAlign: "center"
        }}
          >
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
      </>
    )
}
