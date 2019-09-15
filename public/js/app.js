console.log('Client side javascipt loaded!');


const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const pLocation = document.getElementById('location');
const pForecast = document.getElementById('forecast');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const location  = search.value;
    pLocation.textContent = 'Loading...';
    pForecast.textContent = '';

    fetch('http://localhost:3000/weather?address=' + location).then( (response) => {
        response.json().then( (data) => {

            if(data.error){
                pLocation.textContent = data.error;
            } else {
                pLocation.textContent = data.location + ':';
                pForecast.textContent = data.forecast;
            }
        })
    });
    
});