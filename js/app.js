var header=`
<header class="flex">
<h1>
    <a onclick="mifunsion('hola')" href="#">
         Daiam 
    </a>
</h1>
<nav>
    <ul class="flex">
      <li><a href="./index.html">Inicio</a></li>
      <li><a href="#">Nosotros</a></li>
      <li><a href="./informacion.html">Informacion</a></li>
    </ul>
</nav>
<a href="./login.html">Inicio de secion</a>
</header>`;

var main=`
<main class="flex">
     <h2>Daiam</h2>
     <p>Vende las mejos gitarras</p>
</main>
`;

var footer=`
<footer class="flex">
<ul>
    <li>
        <a href="Tel:+542236071326"><strong>Telefono: </strong>(+54) 2236071326</a>
    </li>
    <li>
       <a href="Mailto:landojorgeabel@gmail.com"><strong>Email: </strong>landojorgeabel@gmail.com</a> 
    </li>
    <li>
       <a href="https://goo.gl/maps/SC7YzxMoimotSt2a9"><strong>Direccion: </strong>Cordoba 1912, Mar del Plata</a>
    </li>
    <li>
       <a href="https://wa.me/542236071326"><strong>WhatsApp: </strong>(+54) 2236071326</a> 
    </li>
</ul>
<strong>
  &COPY; Creado por Jorge Lando 
   </strong>
</footer>

`;

var app=document.querySelector("#app");
    app.innerHTML=header+main+footer;
