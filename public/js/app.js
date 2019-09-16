const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const pLocation = document.getElementById('location');
const pCurrently = document.getElementById('currently');
const pTemp = document.getElementById('low-high');
const pSummary = document.getElementById('summary');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const location  = search.value;
    pLocation.textContent = 'Loading...';
    pCurrently.textContent = '';
    pTemp.textContent = '';
    pSummary.textContent = '';

    fetch('/weather?address=' + location).then( (response) => {
        response.json().then( (data) => {

            if(data.error){
                pLocation.textContent = data.error;
            } else {
                pLocation.textContent = data.location + ':';
                pCurrently.textContent = data.forecastData.currentTemp + '˚ ' + data.forecastData.currentSummary;
                pTemp.textContent = 'Low:' + data.forecastData.lowTemp + '˚ ' + ' High:' + data.forecastData.highTemp + '˚ ';
                pSummary.textContent = data.forecastData.summary;
            }
        })
    });
    
});