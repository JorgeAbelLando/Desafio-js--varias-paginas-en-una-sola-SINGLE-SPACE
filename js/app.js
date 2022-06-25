const clientes=[
    {
        apellido:"Lando",
        nombre:"Jorge",
        edad:"38 años",
        acciones:"toca la guitarra",
    },
    {
        apellido:"Rivera",
        nombre:"Jhon",
        edad:"39 años",
        acciones:"toca el bajo",
    },
    {
        apellido:"Bulacio",
        nombre:"Hector ",
        edad:"42 años",
        acciones:"Toca la bateria",
    },
    {
        apellido:"Perez",
        nombre:"Jose ",
        edad:"50 años",
        acciones:"Toca la trompeta",
    },
]

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
     <p>Vendemos los mejores productos</p>
</main>
`;

maintable=`
<main class="flex">
<button id="tabla" onclick="table1()">Tabla</button>
<button id="grilla" onclick="table2(clientes)">Grilla</button> 
<div id="cont" >
   ${tableInicio(clientes)}
</div>
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

function table1(){
    var cont=document.querySelector('#cont');
    cont.innerHTML=tableInicio(clientes);
  };

  var elementosContenido="";
function tableInicio(array){

    elementosContenido=   ` 
    
    
         <h2>Tabla</h2>
         <p>Tabla de clientes</p>  
         <table class="table">
      <thead>
          <tr>
          <th>Apellido</th>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Acciones</th>
          </tr>
      </thead>
      <tbody>
  `;
  array.forEach(element=>{
   elementosContenido=elementosContenido+
  `
         <tr>
              <td class="table-primary">${element.apellido}</td>
              <td class="table-primary">${element.nombre}</td>
              <td class="table-primary">${element.edad}</td>
              <td class="table-primary">${element.acciones}</td>
         </tr>
  `
  });
  elementosContenido=elementosContenido+`
      </tbody>
   </table>
  
  `;
return elementosContenido;
}
//table1(clientes);
  
  function table2(){
    var cont=document.querySelector('#cont');
    cont.innerHTML=createGrilla(clientes);
  }
  //table2(clientes);

  function createGrilla(array){
    elementosContenido=   ` 
    <h2>Grilla</h2>
    <p>Contenido de la grilla</p> 
    <div>
     `;

    array.forEach(element => {
        elementosContenido=elementosContenido+
        `
            <div class="elementosContenido">
                <h3>${element.apellido}</h3>
                <p>${element.nombre}</p> 
                <p>${element.edad}</p>
                <p>${element.acciones}</p>
             </div>
        `;      
    }); 
    elementosContenido=elementosContenido+`
    </div>; 
`;
   return elementosContenido;
}

  home();

  /*axios({
 method:"get",
 url:'procesar.php,
 responseType:'json,
 params:{}
  })
.then(function(response){})
.catch(function(error){})*/
const url="https://raw.githubusercontent.com/BorisTorrejon/BackendReact/main/db.json";
var petecion= {
    method:"GET",
    url:url,
    resposeType:'json',
};
var data="";
axios(petecion).then(res=>{
     this.data=res.data ;
}).catch(error=>{
    console.log(error);
});
console.log(data);