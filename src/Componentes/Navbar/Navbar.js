import React from "react";
import '../Navbar/Navbar.css'
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
        
        <div className="nav">
                
                <nav class="nav navbar-expand-lg navbar-light color-nav animate__animated animate__slideInDown">
        <div class="container-fluid color-nav navbar-brand"></div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse color-nav ms-3" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link menu active text-nowrap" href="tipos-tortas.html" aria-expanded="false">
                  Tipos de tortas</a>

                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item menu" href="tortas-sencillas.html">Tortas sencillas</a></li>
                  <li><a class="dropdown-item menu" href="tortas-dieteticas.html">Tortas dietéticas</a></li>
                  <li><a class="dropdown-item menu" href="tortas-tematicas.html">Tortas temáticas</a></li>
                  <li><a class="dropdown-item menu" href="tortas-por-pisos.html">Tortas por pisos</a></li>
                  <li><a class="dropdown-item menu" href="brownies.html">Tortas brownies</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link active menu" href="delicias.html" aria-expanded="false">
                  Delicias</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item menu" href="galletas.html">Galletas</a></li>
                  <li><a class="dropdown-item menu" href="marquesas.html">Marquesas</a></li>
                  <li><a class="dropdown-item menu" href="mermeladas.html">Mermeladas</a></li>
                  <li><a class="dropdown-item menu" href="cupcakes.html">Cupcakes</a></li>
                  <li><a class="dropdown-item menu" href="suspiros.html">Suspiros</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active menu"aria-current="page" href="envios.html">Envíos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active menu" href="pagos.html">Pagos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active menu" href="informacion.html">Información</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active menu text-nowrap" href="quienes-somos.html">Quiénes somos</a>
              </li>
            </ul>
          </div>
          
        
    </nav>
    <CartWidget color="disabled" />
      
            
        </div>
    );
};





export default Navbar