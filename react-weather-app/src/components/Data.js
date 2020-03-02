import React from 'react';

export const Data = ({ d }) => {

    // {time, summary, icon, nearestStormDistance, nearestStormBearing, precipIntensity, precipProbability, temperature,
    // apparentTemperature, dewPoint, humidity, pressure, windSpeed, windGust, windBearing, cloudCover, uvIndex, visibility, ozone

    return (
        <div style = {{color:"#364369"}}>
            <h2>Summary: {d.summary}</h2>
            <h3>It is currently {d.temperature} degrees out and there is a {d.precipProbability}% chance of rain</h3>
            
        </div>
    )


}