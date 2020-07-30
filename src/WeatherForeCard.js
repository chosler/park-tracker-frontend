import React from 'react';

const WeatherForeCard = props => {
    
    const convertDateTime = (utc) => {
        let months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        let date = new Date(utc * 1000)
        let month = months_arr[date.getMonth()]
        let day = date.getDate()
        let convdataTime = month+' '+day
        return convdataTime
    }
    // console.log(convertDateTime(props.dt));
    return(
        
        <div className='forecast-card'>
            <h4>{convertDateTime(props.dt)}</h4>
            <img className='weatherIcon' src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`} alt={props.mainCond} />
            <p>High:</p><h4>{props.temp.max}</h4>
            <p>Low:</p><h4>{props.temp.min}</h4>
            <p>Precipation:</p><h4>{props.pop}%</h4>
        </div>
        
    )
}

export default WeatherForeCard;