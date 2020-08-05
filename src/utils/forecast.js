const request = require('request')

const forecast = (letitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=5600202d0442d26717a5c0dd834300ad&query=' + encodeURIComponent(letitude) + ',' + encodeURI(longitude) + '&units=f'
   
    request({url,json:true}, (error,{body}={})=>{
           if(error){
               callback('Not able to connect to weather Service',undefined)
           }else if(body.error){
               callback('Cordinates are not tracaeable',undefined)
           }else{
               callback(undefined, body.current.weather_descriptions+'. It is currently '+ body.current.temperature + ' degrees out. There is a '+ body.current.precip+'% chance of rain and pressent humidity level is '+body.current.humidity)
           }
   
   
    })
   
   }
   
   module.exports = forecast