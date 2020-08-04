const request = require('request')


const geocode = (address, callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicHJhZGRlcCIsImEiOiJja2RibHFrNnoxN3B2MnpwYzd0cWQ3dXhiIn0.m3rXvaHMlfaA5uD7Hf1p4g'

    request({url, json:true},(error,{body}={})=>{
        if(error){
            callback('Unable to connect to location services',undefined)
        } else if(body.features.length === 0){
            callback('Unable to find location, try another search',undefined)
        }else{
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude:body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode