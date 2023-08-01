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
    Typography
} from "@mui/material"
import { useState, useContext } from "react"
import { useForm } from "react-hook-form"
// import { db } from "../../utils/firebase.js"
// import { collection, getDocs } from 'firebase/firestore'
import { auth, provider } from '../../utils/firebase.js'
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { Context } from "../../context/AuthContext.jsx"

const LoginForm = () => {
    const [ visible, setVisible ] = useState(false)
    // const [ logUser, setLogUser ] = useState(null)
    // const navigate = useNavigate()
    const { 
        register,
        handleSubmit, 
        reset,
        formState: { errors }, 
    } = useForm();
    const { user } = useContext(Context)

    const onSubmit = handleSubmit((data) => {
        signInWithEmailAndPassword(auth, data.correo, data.contraseña)
            .then(() => {
                reset()
                console.log(user.email)
            })
            .catch((error) => {
                console.log(error)
            })
        // if(logUser !== null) {
        //     if (data.correo === logUser.correo && data.contraseña === logUser.contraseña) {
        //         console.log("Ya estas conectado con esa cuenta.")
        //         reset()
        //         return
        //     }
        // }
        // const ref = collection(db, "usuarios")
        // const docs = [] 
        // getDocs(ref)
        //     .then((snaps)=>{
        //         snaps.docs.map((doc) => {
        //             docs.push(doc.data())
        //         })
        //     })
        //     .then(()=>{
        //         if(logUser === null){
        //             const newUser = docs.filter((document) => {
        //                 if (data.correo === document.correo && data.contraseña === document.contraseña) {
        //                     return document
        //                 }           
        //             })
        //             console.log(newUser)
        //             if(newUser.length === 0) {
        //                 console.log("La cuenta que has ingresado no existe.")
        //             } else {
        //                 setLogUser(newUser[0])
        //                 console.log("Bienvenido "+newUser[0].nombre+"!")
        //                 reset()
        //             }
        //         }
        //     })
    })

    const handlePassword = () => {
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
                flexDirection: "column",
                justifyContent: "center"
            }}>
                <Typography
                    variant='h2'
                    sx={{
                        textAlign: "left",
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
                    {/* <Button
                        type='button'
                        variant='outlined'
                        onClick={handleGoogleButton}
                    > 
                        Ingresar con Google
                    </Button> */}
                </Box>
            </Paper>
    )
}

export default LoginForm