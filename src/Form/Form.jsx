import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { 
    Box, 
    Button, 
    InputAdornment, 
    Paper, 
    TextField, 
    ThemeProvider, 
    createTheme,
    Container, 
    IconButton
} from "@mui/material"
import { 
    red, 
    blue 
} from "@mui/material/colors"
import { useState } from "react"
const Form = () => {
    const [ values, setValues ] = useState({
        name: "",
        lastName: "",
        password: "",
        email: ""
    })
    const [ visible, setVisible ] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
    }
    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleIconButton = () => {
        if(visible) {
            setVisible(false)
        } else {
            setVisible(true)
        }
    }
    
    return(
            <Paper sx={{ 
                height: 1,
                display: "flex",
                alignItems: "center"
            }}>
                <Box
                    noValidate
                    onSubmit={handleSubmit}
                    component="form"
                    sx={{
                        width:"100%", 
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <TextField 
                        autoComplete='off'
                        value={values.name}
                        onChange={handleInputChange}
                        // error={values.name}
                        helperText={values.name && "Don't type anymore"}
                        name="name"
                        label="Name"
                        sx={{
                            mx: 4,
                            my: 4
                        }}
                    />
                    <TextField 
                        autoComplete='off'
                        value={values.lastName}
                        onChange={handleInputChange}
                        // error={values.lastName}
                        helperText={values.lastName && "Don't type anymore"}
                        name="lastName"
                        label="Last name"
                        sx={{
                            mx: 4,
                            mb: 4
                        }}
                    />
                    <TextField  
                        autoComplete='off'
                        value={values.password}
                        onChange={handleInputChange}
                        // error={values.password}
                        helperText={values.password && "Don't type anymore"}
                        name="password"
                        label="Password"
                        type={ visible ? "text" : "password"}
                        sx={{
                            mx: 4,
                            mb: 4,
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment 
                                        position="end"
                                    >
                                    <IconButton onClick={handleIconButton}>
                                        { visible ? <VisibilityOffIcon /> : <VisibilityIcon /> }
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    <TextField 
                        autoComplete='off'
                        value={values.email}
                        onChange={handleInputChange}
                        error={values.email ? true : false }
                        helperText={values.email && "Don't type anymore"}
                        name="email"
                        label="Email"
                        sx={{
                            mx: 4,
                            mb: 4
                        }}
                    />
                    <Button
                        endIcon={<VisibilityIcon />}
                        type="submit"
                        variant="contained"
                        sx={{
                            mx: 4,
                            mb: 4,
                        }}
                        size='large'
                    >
                        Send
                    </Button>
                </Box>
            </Paper>
    )
}

export default Form