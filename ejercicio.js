
const apiUrl = 'https://digi-api.com/api/v1/digimon';

fetch(apiUrl)
  .then(response => {
    return response.json();
  })
  .then(data => {
    data.content.forEach(digimones => {
      console.log('------------');
      console.log(digimones.name);
    });
    
  })
  .catch(error => {
    console.error('Ocurrió un error:', error);
  });