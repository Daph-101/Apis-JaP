var URL_C_Onix ='https://daph-101.github.io/Apis-JaP/C_Onix.json'
var URL_Fiat = 'https://daph-101.github.io/Apis-JaP/Fiat.json'
var URL_Peugeot = 'https://daph-101.github.io/Apis-JaP/Peugeot.json'
var URL_Suzuki = 'https://daph-101.github.io/Apis-JaP/Suzuki.json'

var getJSONData = function (url) {
    var result = {};
    return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then(function (response) {
        result.status = 'ok';
        result.data = response;
        return result;
      })
      .catch(function (error) {
        result.status = 'error';
        result.data = error;
        return result;
      });
  }