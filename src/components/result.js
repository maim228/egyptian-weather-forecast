import React from "react";
import './result.css'
import { WiCelsius,WiCloudyGusts,WiCloudy,WiDaySunny } from "react-icons/wi";


class Result extends React.Component{
    state={
        temp:'',
        sky:'',
        windSpeed:'',
        name:''
    }
    componentDidMount(){
    const city = window.location.href.substring(window.location.href.lastIndexOf('/') + 1) 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&lang=ar&units=metric`)
    .then((res) => res.json())
    .then((data) => this.setState({
        name:data.name,
        temp:data.main.temp,
        sky:data.weather[0].description,
        windSpeed:data.wind.speed,
    }));
      }
    render(){
        const {name,temp,sky,windSpeed} = this.state
        const showTempTwo = temp > 30 ? <div className='temp' style={{color:'#D98C00'}}>{temp}<WiCelsius /></div>:<div className='temp' style={{color:'#1597E5'}}>{temp}<WiCelsius /></div>
        const showTemp = 30 > temp > 20 ? <div className='temp' style={{color:'#FFA400'}}>{temp}<WiCelsius /></div>:showTempTwo
        const skyIcon = sky.includes('غيوم') ? <WiCloudy /> : <WiDaySunny />
        return(
            <div className='result'>
                <div className='resultBox'>
                    <h1>{name}</h1>
                    <h3>{showTemp}</h3>
                    <div className='secondInfo'>
                        <h5 style={{color:'#3DB2FF'}}>{sky} {skyIcon}</h5>
                        <h5 style={{color:'#79B4B7'}}>
                        سرعة الرياح:
                            {windSpeed} 
                            <WiCloudyGusts />
                        </h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Result