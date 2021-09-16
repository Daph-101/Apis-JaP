var URL_C_Onix ='https://daph-101.github.io/Apis-JaP/C_Onix.json'
var URL_Fiat = 'https://daph-101.github.io/Apis-JaP/Fiat.json'
var URL_Peugeot = 'https://daph-101.github.io/Apis-JaP/Peugeot.json'
var URL_Suzuki = 'https://daph-101.github.io/Apis-JaP/Suzuki.json'

function autos(){

  fetch(URL_C_Onix)
  .then(req => req.json())
  .then(MostrarAutos =>{
    MostrarAutos.forEach(element => {
      let auto = " ";
      let images = " ";
      auto= `<ul>
      
      <a href="info-autos.html"><button id="info-auto">Ver más</button></a> <br>
      <p>` + `<strong>Marca: </strong>` + element.name +`</p>
      <p>` + `<strong>Descripcion: </strong>`+ element.description + `</p>
      <p>` + `<strong>Precio: </strong>` + element.cost + `</p>
  </ul>`
      
  
  images += `  <img class="img" src="img/${element.name}" style="width:350px;">` + `</p>`;
      document.getElementById("informacion").innerHTML += auto;
      document.getElementById("imagenes").innerHTML = images;
    });
    
  })

}

