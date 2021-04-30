const moment = require('moment-timezone');
const request = require('request');
require('dotenv').config()

const oberndorf = {
    id: '2859654'
}

function getWeather(obj){
    return new Promise((res, rej) => {


        const apiURL = `http://api.openweathermap.org/data/2.5/weather?id=${obj.id}&appid=${process.env.API_KEY}&units=metric`;
        console.log(apiURL);

        request(apiURL, function (error, response, body) {
            if(response.statusCode == 401) {
                rej(JSON.parse(body).message)
            } 
            if(response && response.statusCode == 200) {
                let result = JSON.parse(body)
                // Object.assign(obj, {coordinats: result.coord});
                obj.coordinats = result.coord
                obj.temp = result.main;
                obj.time = moment().tz("Europe/Berlin").format()
                res(obj);
            }
     });
    });
}

setInterval(()=> {
    const result = getWeather(oberndorf);
    result.then(val => console.log('Resolved', val))
        .catch(reason => console.log('Rejected:', reason))
}, 1000 );