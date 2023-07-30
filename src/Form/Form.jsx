import { useEffect } from 'react'
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
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { useState } from "react"
import { useForm } from "react-hook-form";

const Form = () => {
    const [ visible, setVisible ] = useState(false)
    const [ visibleTwo, setVisibleTwo ] = useState(false)
    const { 
        register,
        handleSubmit, 
        formState: { errors }, 
        watch,
        setValue 
    } = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data)
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
                    Registrate
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
                    <Box
                        sx={{
                            display: "flex"                            
                        }}
                    >
                        <TextField
                            { 
                                ...register("name",
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
                            name="name"
                            autoComplete='off'
                            helperText= { errors.name && `${errors.name.message}`}
                            label="Nombre"
                            sx={{
                                flexGrow: 1,
                                mr: 4,
                                ml: 4,
                            }}
                        />
                        <TextField 
                            { 
                                ...register("lastName",
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
                            name="lastName"
                            autoComplete='off'
                            helperText={errors.lastName && `${errors.lastName.message}`}
                            label="Apellido"
                            sx={{
                                flexGrow: 1,
                                mr: 4,
                                mb: 4
                            }}
                        />
                    </Box>
                    <TextField  
                        {
                            ...register("password",
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
                        name="password"
                        autoComplete='off'
                        helperText={errors.password && `${errors.password.message}`}
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
                                    if(value === watch().password) {
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
                            mb: 4,
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
                            ...register("email",
                            {
                                pattern: {
                                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                    message: "Correo no valido."
                                }
                            })
                        }
                        name= "email"
                        autoComplete='off'
                        helperText={ errors.email && `${errors.email.message}` }
                        label="Correo"
                        sx={{
                            mx: 4,
                            mb: 4
                        }}
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker  
                            sx={{
                                mx: 4,
                                mb: 4
                            }}
                            onChange= { (newDateValue) => {
                                    setValue("birthday", `${newDateValue.$D}/${newDateValue.$M + 1}/${newDateValue.$y}`)
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
                        Send
                    </Button>
                </Box>
            </Paper>
    )
}

export default Form