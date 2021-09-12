var URL_C_Onix ='https://daph-101.github.io/Apis-JaP/C_Onix.json'
var URL_Fiat = 'https://daph-101.github.io/Apis-JaP/Fiat.json'
var URL_Peugeot = 'https://daph-101.github.io/Apis-JaP/Peugeot.json'
var URL_Suzuki = 'https://daph-101.github.io/Apis-JaP/Suzuki.json'

function autos(URL_C_Onix){

document.getElementById("informacion").innerHTML = "";

  fetch(URL_C_Onix)
  .then(req => req.json())
  .then(MostrarAutos =>{
    MostrarAutos.forEach(element => {
      let auto = " ";
      auto= `
      <p>Nombre:` + element.name + `</p>`;
      `<p>Descripcion:` + element.descripción + `</p>`;
      `<p>Cantidad de ventas: ` + element.soldCount + `</p>`;
      `<p>Fotos del vehiculo ` + element.imágenes + `</p>`;
    });
    
    document.getElementById("informacion").innerHTML += auto;
  })
  autos(URL_C_Onix)
}

