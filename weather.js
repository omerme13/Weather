class Weather {
    constructor(city, countryCode) {
        this.apiKey = '352ab6b8c9501a470633fda871c77221';
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}.json()&appid=${this.apiKey}`);

        const responseData = await response.json();
        return responseData;
    }

    changeLocation(city, countryCode) {
        this.countryCode = countryCode;
        this.city = city;
    }
}
