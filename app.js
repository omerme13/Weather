const storage = new Storage();
const data = storage.getData();
const degType = data.degType;

const weather = new Weather(data.city, data.countryCode);
const ui = new UI();

const deg = document.querySelector('.container-deg');
const c = document.querySelector('.celsius');
const f = document.querySelector('.fahrenheit');
const modal = document.querySelector('.modal');
const locationButton = document.querySelector('.btn');
const close = document.getElementsByClassName("close")[0];
const updateButton = document.querySelector('.btn-modal');

function displayModalError(msg) {
    const error = document.querySelector('.error');
    ui.showErrorMessage(error, msg);
    modal.style.display = "block";
}

function displayWeather() {
    weather.getWeather()
        .then(res => ui.paint(res, degType))
        .catch(err => {
            displayModalError('invalid input');/*can also include the err*/
            // console.log(err.message);
            storage.setLocationData('', '');
        });
}

function setDefDeg() {
    ui.displayDeg(degType);
    storage.setDegType(degType);
}

function updateWeather() {
    const city = document.querySelector('#city');
    const countryCode = document.querySelector('#country-code');

    if (city.value !== '' && countryCode.value !== '') {
        weather.changeLocation(city.value, countryCode.value);
        storage.setLocationData(city.value, countryCode.value);
        displayWeather();
        ui.clearFields(city, countryCode);
        updateButton.classList.add('close');
    }
    else {
        displayModalError('Need to fill all fields');
        updateButton.classList.remove('close');
    }
}

function degreesConversion(e) {
    if (e.target.classList.contains('celsius')) {
        ui.convertDeg(c);
        storage.setDegType('c');
    } else if (e.target.classList.contains('fahrenheit')){
        ui.convertDeg(f);
        storage.setDegType('f');
    }
}

function modalClose(e) {
    if (e.target.classList.contains('close')) {
        modal.style.display = "none";
    }
}

function loadEventListeners() {
    document.addEventListener('DOMContentLoaded', displayWeather);
    document.addEventListener('DOMContentLoaded', setDefDeg);
    deg.addEventListener('click', degreesConversion);
    locationButton.addEventListener('click', () => modal.style.display = "block");
    modal.addEventListener('click', modalClose);
    updateButton.addEventListener('click', updateWeather);
}

loadEventListeners();
