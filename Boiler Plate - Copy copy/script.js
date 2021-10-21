const main = document.getElementById('main');
const form = document.getElementById('form');
const search= document.getElementById('search');

const apiKey = "d18bd0cc2d7814309118e7fdd274d524";

const url = (city) => 'api.openweathermap.org/data/2.5/weather?q=${city}&appid=${d18bd0cc2d7814309118e7fdd274d524}';

async function getWeatherByLocation(city) {
    const response = await fetch(url(city), {
        origin = 'cros'})
        const responseData = await response.json();
        console.log(responseData);
}
