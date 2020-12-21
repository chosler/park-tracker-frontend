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
    return(
        <div className='forecast-card'>
            <h4 className='dateTime'>{convertDateTime(props.dt)}</h4>
            <img className='weatherForecastIcon' src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`} alt={props.mainCond} />
            <p className='weatherText'>High:</p>
                <h4 className='weatherResult'>{props.temp.max}</h4>
            <p className='weatherText'>Low:</p>
                <h4 className='weatherResult'>{props.temp.min}</h4>
            <p className='weatherTextPrec'>Precipation:</p>
                <h4 className='weatherResultPrec'>{props.pop}%</h4>
        </div>        
    )
}

export default WeatherForeCard;