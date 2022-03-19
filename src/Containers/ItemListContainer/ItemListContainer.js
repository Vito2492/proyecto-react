import React from "react";
import "./ItemListContainer.css"


const ItemListContainer = ({greeting}) => {
    
    const cursive = "cursive"
    const center = "center"
    const underline = "underline"

  
  
    const Containerstyle = {
        fontSize:80,
        fontFamily: cursive,
        textAlign: center,
        textDecoration: underline,


    }



    return (
        <h1 style={Containerstyle} >{greeting}</h1>
          
        
    );
};

export default ItemListContainer



