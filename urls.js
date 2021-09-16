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
      auto= `<ul>
      <ol> <img src=" ` + element.images + ` " style="width:350px;">` + `</ol>
      <a href="product-info.html"><button id="info-auto">Ver más</button></a> <br>
      <ol>` + `<strong>Marca: </strong>` + element.name +`</ol>
      <ol>` + `<strong>Descripcion: </strong>`+ element.description + `</ol>
      <ol>` + `<strong>Precio: </strong>` + element.cost + `</ol>
  </ul>`
      
      document.getElementById("informacion").innerHTML += auto;
    });
    
  })
// .then(MostrarImg){
//   fetch()
// }
}

