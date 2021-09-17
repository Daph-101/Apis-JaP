var URL_C_Onix ='https://daph-101.github.io/Apis-JaP/C_Onix.json'
var URL_Fiat = 'https://daph-101.github.io/Apis-JaP/Fiat.json'
var URL_Peugeot = 'https://daph-101.github.io/Apis-JaP/Peugeot.json'
var URL_Suzuki = 'https://daph-101.github.io/Apis-JaP/Suzuki.json'
var url;
function autos(){

  fetch(URL_Fiat)
  .then(req => req.json())
  .then(MostrarAutos =>{
    
    MostrarAutos.forEach(element => {
      
      let auto = " ";

      auto= `<div>
      <a href="info-autos.html"><button id="info-auto">Ver más</button></a> <br>
      <p>` + `<strong>Marca: </strong>` + element.name +`</p>
      <p>` + `<strong>Descripcion: </strong>`+ element.description + `</p>
      <p>` + `<strong>Precio: </strong>` + element.cost + `</p>
      </div>`
      
 
      document.getElementById("informacion").innerHTML += auto;
     
    });
    MostrarImg(url);
  })

}
function MostrarImg(url){
 url = [URL_C_Onix, URL_Fiat];

  let linea = "<br><hr><br>";
  let Img = "";
  Img += `
  ` + linea +`
  <img src="img/car1.jpg" style="width:130px;">
    <img src="img/cat1.jpg" style="width:120px;">
    <img src="img/car3.jpg" style="width:150px;">
 
  `;
  document.getElementById("imagenes").innerHTML = Img;
  
}



// async function getLinks(autos){
//   let array = [];

//   for(let auto of autos){
//   let array = fetch(`https://daph-101.github.io/Apis-JaP/${auto}`).then(
//     Respuesta  => {
//       if(Respuesta.status != 200){
//         return null;
//       } else {
//         return Respuesta.json();
//       }
      
//     },
//     error =>{
//       return null;
//     }
//   );
//   array.push(auto);
// }
// let results = await Promise.all(array);
// return results;
// }