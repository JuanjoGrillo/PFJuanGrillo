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
} from "@mui/material"

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import {
    useContext, 
    useState 
} from "react"
import { useForm } from "react-hook-form"
import { auth } from "../../utils/firebase.js"
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    updateProfile 
} from "firebase/auth"
import { ContextAuth } from "../../context/AuthContext.jsx"
import { NavLink } from 'react-router-dom'

export const RegisterForm = () => {
    const [ visible, setVisible ] = useState(false)
    const [ visibleTwo, setVisibleTwo ] = useState(false)
    const { setUser } = useContext(ContextAuth)
    const { 
        register,
        handleSubmit, 
        formState: { errors }, 
        watch,
        setValue,
        reset 
    } = useForm();

    const onSubmit = handleSubmit((data) => {
        createUserWithEmailAndPassword(auth, data.correo, data.contraseña)
            .then(() => {
                signInWithEmailAndPassword(auth, data.correo, data.contraseña)
                    .then(()=>{
                        updateProfile(auth.currentUser, {
                            displayName: data.nombre
                        })
                            .then(()=>{
                                setUser(auth.currentUser)
                                reset()
                            })
                            .catch((error)=>{
                                window.alert("Algo salio mal! Intentalo de nuevo.")
                            })
                    })
                
            })
            .catch((error)=>{
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

    const handleRepeatPassword = () => {
        if(visibleTwo) {
            setVisibleTwo(false)
        } else {
            setVisibleTwo(true)
        }
    }
    
    return(
        <Box
        sx={{
            backgroundColor: "#FFFFFF",
            flexGrow: 1
        }}
    >

                <Box
                    noValidate
                    onSubmit={ onSubmit }
                    component="form"
                    sx={{
                        width:"100%", 
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                            <Typography
                                variant='h2'
                                sx={{
                                    textAlign: "center",
                                    mb: 3,
                                    ml:4,
                                }}
                            >
                                Registrate
                            </Typography>
                    <Box
                        sx={{
                            display: "flex"
                        }}
                    >
                        <TextField
                            { 
                                ...register("nombre",
                                {
                                    required: {
                                        value: true,
                                        message: "Debes ingresar un nombre."
                                    },
                                    minLength: {
                                        value: 3,
                                        message: "El nombre debe contener al menos tres caracteres."
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: "El nombre no puede sobrepasar los veinte caracteres."
                                    }
                                })
                            } 
                            name="nombre"
                            autoComplete='off'
                            helperText= { errors.nombre && `${errors.nombre.message}`}
                            label="Nombre"
                            sx={{
                                flexGrow: 1,
                                mr: 4,
                                ml: 4,
                            }}
                        />
                        <TextField 
                            { 
                                ...register("apellido",
                                {
                                    required: {
                                        value: true,
                                        message: "Debes ingresar un apellido."
                                    },
                                    minLength: {
                                        value: 3,
                                        message: "El apellido debe contener al menos tres caracteres."
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: "El apellido no puede sobrepasar los veinte caracteres."
                                    }
                                })
                            } 
                            name="apellido"
                            autoComplete='off'
                            helperText={errors.apellido && `${errors.apellido.message}`}
                            label="Apellido"
                            sx={{
                                flexGrow: 1,
                                mr: 4,
                                mb: 2
                            }}
                            />
                    </Box>
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
                            mb: 2,
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
                    <TextField  
                        { 
                            ...register("repeatPassword",
                            {
                                required: {
                                    value: true,
                                    message: "Debes ingresar la contraseña."
                                },
                                minLength: {
                                    value: 4,
                                    message: "La contraseña debe constar de al menos cuatro caracteres."
                                },
                                maxLength: {
                                    value: 16,
                                    message: "La contraseña debe tener menos de 16 caracteres."
                                },
                                validate: (value) => {
                                    if(value === watch().contraseña) {
                                        return true 
                                    } else {
                                        return "Las contraseñas no coinciden."
                                    }
                                }
                            })
                        }
                        name= "repeatPassword"
                        autoComplete='off'
                        helperText={errors.repeatPassword && `${errors.repeatPassword.message}`}
                        label="Repite la contraseña"
                        type={ visibleTwo ? "text" : "password"}
                        sx={{
                            mx: 4,
                            mb: 2,
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment 
                                position="end"
                                >
                                    <IconButton onClick={handleRepeatPassword}>
                                        { visibleTwo ? <VisibilityOffIcon /> : <VisibilityIcon /> }
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        />
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
                            mb: 2
                        }}
                        />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker  
                            sx={{
                                mx: 4,
                                mb: 2,
                            }}
                            onChange= { (newDateValue) => {
                                setValue("nacimiento", `${newDateValue.$D}/${newDateValue.$M + 1}/${newDateValue.$y}`)
                                } 
                            }
                            name="birthday"
                            label="Fecha de nacimiento"
                            slotProps={{ textField: { variant: 'outlined' } }}
                        />
                    </LocalizationProvider>
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
                        to={`/login`}
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
                            Si ya tienes una cuenta puedes iniciar sesión
                        </Typography>
                    </NavLink>
                </Box>
            </Box>
                            )
}
