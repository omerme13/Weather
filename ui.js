class UI {
    constructor() {
        this.location = document.querySelector('.w-location');
        this.description = document.querySelector('.w-description');
        this.string = document.querySelector('.w-string');
        this.icon = document.querySelector('#w-icon');
        this.humidity = document.querySelector('#w-humidity');
        this.wind = document.querySelector('#w-wind');
    }

    paint(weather, degType) {
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.description.textContent = weather.weather[0].description;
        if (degType === 'c') {
            this.string.textContent = Math.round(weather.main.temp - 273.15);
        } else {
            this.string.textContent = Math.round((weather.main.temp - 273.15)*(9/5)+32);
        }
        this.icon.setAttribute('src', 'http://openweathermap.org/img/w/' + weather.weather[0].icon + '.png');
        humidity.textContent = 'Humidity: ' + weather.main.humidity + '%';
        wind.textContent = 'Wind: ' + weather.wind.speed + 'm/s';
    }

    convertDeg(type) {
        if (type === c) {
            if (c.classList.contains('active')) {
                return;
            }
            this.string.textContent = Math.round((this.string.textContent - 32) * (5/9));
            c.classList.add('active');
            f.classList.remove('active');
        } else {
            if (f.classList.contains('active')) {
                return;
            }
            this.string.textContent = Math.round(this.string.textContent * (9/5) + 32);
            f.classList.add('active');
            c.classList.remove('active');
        }
    }

    displayDeg(type) {
        if (type === 'c') {
            c.classList.add('active');
            f.classList.remove('active');
        } else {
            f.classList.add('active');
            c.classList.remove('active');
        }
    }

    clearFields(field1, field2) {
        field1.value = '';
        field2.value = '';
    }

    showErrorMessage(element, msg) {
        element.innerHTML = msg;
        setTimeout(function() {
            element.innerHTML = '';
        }, 2000);
    }
}
