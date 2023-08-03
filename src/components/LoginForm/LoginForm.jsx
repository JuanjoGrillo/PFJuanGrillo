import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import SendIcon from '@mui/icons-material/Send'
import { 
    Box, 
    Button, 
    InputAdornment, 
    Paper, 
    TextField, 
    IconButton,
    Typography,
    Container
} from "@mui/material"
import { 
    useState,
    useContext
} from "react"
import { useForm } from "react-hook-form"
import { auth } from '../../utils/firebase.js'
import { signInWithEmailAndPassword } from "firebase/auth"
import { NavLink } from "react-router-dom"
import { ContextAuth } from "../../context/AuthContext.jsx"

const LoginForm = () => {
    const [ visible, setVisible ] = useState(false)

    const { 
        register,
        handleSubmit, 
        reset,
        formState: { errors }, 
    } = useForm();
    const { user } = useContext(ContextAuth)

    const onSubmit = handleSubmit((data) => {
        signInWithEmailAndPassword(auth, data.correo, data.contraseña)
            .then(() => {
                reset()
            })
            .catch((error) => {
                console.log(error)
            })
    })

    const handlePassword = () => {
        if(visible) {
            setVisible(false)
        } else {
            setVisible(true)
        }
    }
    
    return(
        <Box
            sx={{
                backgroundColor: "#FFFFFF",
                flexGrow: 1
            }}
        >

                <Typography
                    variant='h2'
                    sx={{
                        textAlign: "center",
                        mb: 3,
                        ml:4
                    }}
                    >
                    Inicia sesión
                </Typography>
                <Box
                    noValidate
                    onSubmit={ onSubmit }
                    component="form"
                    sx={{
                        width:"100%", 
                        display: "flex",
                        flexDirection: "column",
                        flexGrow:1,
                    }}
                    >
                    <TextField 
                        { 
                            ...register("correo",
                            {
                                pattern: {
                                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                    message: "Correo no valido."
                                }
                            })
                        }
                        name= "correo"
                        autoComplete='off'
                        helperText={ errors.correo && `${errors.correo.message}` }
                        label="Correo"
                        sx={{
                            mx: 4,
                            mb: 4
                        }}
                    />
                    <TextField  
                        {
                            ...register("contraseña",
                            {
                                required: {
                                    value: true,
                                    message: "Debes ingresar una contraseña."
                                },
                                minLength: {
                                    value: 4,
                                    message: "La contraseña debe constar de al menos cuatro caracteres."
                                },
                                maxLength: {
                                    value: 16,
                                    message: "La contraseña debe tener menos de 16 caracteres."
                                }
                            }) 
                        } 
                        name="contraseña"
                        autoComplete='off'
                        helperText={errors.contraseña && `${errors.contraseña.message}`}
                        label="Contraseña"
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
                                    <IconButton onClick={handlePassword}>
                                        { visible ? <VisibilityOffIcon /> : <VisibilityIcon /> }
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        />
                    <Button
                        endIcon={<SendIcon />}
                        type="submit"
                        variant="contained"
                        sx={{
                            mx: 4,
                            mb: 4,
                        }}
                        size='large'
                        >
                        Enviar
                    </Button>
                    <NavLink
                        to={`/registro`}
                        style={({ isActive }) =>
                            ({
                                color: 'inherit',
                                background: 'inherit',
                                textDecoration: 'none'
                            })
                        }
                        >
                        <Typography
                            variant='h6'
                            sx={{
                                textAlign: "center",
                                color: "blue"
                            }}
                            >
                            O crea una cuenta con nosotros
                        </Typography>
                    </NavLink>
                </Box>
            </Box>
                   
    )
}
                        
export default LoginForm