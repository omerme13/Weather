class Storage {
    constructor() {
        this.city;
        this.countryCode;
        this.degType;
        this.defCity = 'Haifa';
        this.defCountryCode = 'IL';
        this.defDegType = 'c';
    }

    getData() {
        if (localStorage.getItem('city') === null) {
            this.city = this.defCity;
        } else {
            this.city = localStorage.getItem('city');
        }
        if (localStorage.getItem('countryCode') === null) {
            this.countryCode = this.defCountryCode;
        } else {
            this.countryCode = localStorage.getItem('countryCode');
        }
        if (localStorage.getItem('degType') === null) {
            this.degType = this.defDegType;
        } else {
            this.degType = localStorage.getItem('degType');
        }

        return {
            city: this.city,
            countryCode: this.countryCode,
            degType: this.degType
        }
    }

    setLocationData(city, countryCode) {
        localStorage.setItem('city', city);
        localStorage.setItem('countryCode', countryCode);
    }

    setDegType(degType) {
        localStorage.setItem('degType', degType);
    }
}
