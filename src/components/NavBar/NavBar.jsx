import { useState, useContext } from "react"
import { Context } from "../../context/AuthContext"
import { signOut } from "firebase/auth"
import { auth } from "../../utils/firebase.js"
import { deepOrange } from '@mui/material/colors';
import AlbumIcon from '@mui/icons-material/Album'
import MenuIcon from "@mui/icons-material/Menu"
import { 
    AppBar, 
    Button, 
    Typography, 
    Box, 
    Toolbar, 
    Tooltip, 
    Menu, 
    MenuItem,
    IconButton,
    Container,
    Avatar
  } from "@mui/material"
  import { NavLink } from "react-router-dom";
  
  const pages = ['Tienda', 'Rock', 'Pop', 'Jazz']
  const settings = [ 'Ver perfil', 'Cambiar cuenta', 'Cerrar sesión']
  
const NavBar = () => {
    const { user } = useContext(Context)
    const [anchorElNav, setAnchorElNav] = useState(null)
    const [anchorElUser, setAnchorElUser] = useState(null)

    const handleSignOut = () => {
        signOut(auth)
            .then(()=>{
                console.log("sign out")
            })
            .catch((error)=> {
                console.log(error)
            })
    }


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseNavMenu = (page) => {
        setAnchorElNav(null)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    return(  
        <AppBar position="static" sx={{width:"inherit"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AlbumIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        DISQUERIA
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                        }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AlbumIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                            <NavLink
                                to={`/${page}`}
                                style={({ isActive }) =>
                                  ({
                                      color: 'inherit',
                                      background: 'inherit',
                                      textDecoration: 'none'
                                    })
                                }
                            >
                                    {page}
                            </NavLink>
                            </Button>
                        ))}
                    </Box>
                    {   user && <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar sx={{ bgcolor: deepOrange[500]}} alt="Remy Sharp">
                                        { user.displayName && user.displayName.charAt(0) }
                                    </Avatar>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center" onClick={setting === 'Cerrar sesión' ? handleSignOut : undefined}>{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    )    
}

export default NavBar