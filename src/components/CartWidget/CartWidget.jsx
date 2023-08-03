import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton, Badge } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useContext } from "react"
import { ContextCart } from '../../context/CartContext';

export const CartWidget = () => {
    const { items } = useContext(ContextCart)
    return(
        <NavLink to="carrito">
            <IconButton sx={{color:"#FFFFFF"}} aria-label="carrito de compras">
                <Badge color="secondary"  badgeContent={items.length}>
                    <ShoppingCartIcon sx={{fontSize: 30}}/>
                </Badge>
            </IconButton>
        </NavLink>
    )
}