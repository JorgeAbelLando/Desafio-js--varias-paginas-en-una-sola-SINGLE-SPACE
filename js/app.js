var header=`
<header class="flex">
<h1 onclick="home()">
    <a href="#">
         Daiam 
    </a>
</h1>
<nav>
    <ul class="flex">
      <li onclick="home()"><a href="#">Inicio</a></li>
      <li onclick="about()"><a href="#">Nosotros</a></li>
      <li onclick="table()"><a href="#">Tabla</a></li>
      <li><a href="./informacion.html">Informacion</a></li>
    </ul>
</nav>
<a href="./login.html">Inicio de secion</a>
</header>`;

mainhome=`
<main class="flex">
     <h2>Daiam</h2>
     <p>Vende las mejos gitarras</p>
</main>
`;
 mainabout=`
<main class="flex">
     <h2>Nosotros</h2>
     <p>Vende las mejos gitarras</p>
</main>
`;
t=`
<table>
<thead>
    <tr>
        <th>Apellido</th>
        <th>Nombre</th>
        <th>Edad</th>
        <th>Acciones</th>
    </tr>   
</thead>
<tbody>
     <tr>
       <td>Lando</td>
       <td>Jorge</td>
       <td>38</td>
       <td><a href="#">Detalle</a><a href="#">Eliminar</a><a href="#">Editar</a></td>
     </tr>
</tbody>
</table>
`;
maintable=`
<main class="flex">
     <h2>Tabla</h2>
     <p>Vende las mejos gitarras</p>
     ${t}
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
    
function home(){
    app.innerHTML=header+mainhome+footer;
};
function about(){
    app.innerHTML=header+mainabout+footer;
};
function table(){
    app.innerHTML=header+maintable+footer;
};
home();