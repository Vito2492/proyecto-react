import React from "react";
/*import cart from '../../img/logoTienda.png'*/
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../CartWidget/CartWidget.css'

const CartWidget = () => {
    return (
        <div className="carrito">

        {/*<img className="carrito" src={cart} alt= "carrito" />*/}

        <ShoppingCartIcon color="disabled" />


        </div>
    );
};

export default CartWidget