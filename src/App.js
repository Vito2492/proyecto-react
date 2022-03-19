import React from "react";
import Header from "../src/Componentes/Header/Header";
import Navbar from "../src/Componentes/Navbar/Navbar"
import ItemListContainer from "../src/Containers/ItemListContainer/ItemListContainer";
import './App.css';


const App = () =>{


return (
  <div className="App-header">
    <Header />
    <Navbar />
    <ItemListContainer greeting={"Tortas y cupcakes personalizadas"}/>
  </div>
  );

};


export default App


//Cambiar lo de Header por NavBar, crear una carpeta Components también. Traer navbar de otro proyecto. Hacer git push y mandar link