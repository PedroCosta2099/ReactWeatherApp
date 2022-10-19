import React, { Component} from "react";
import Map from './Map';
import {Card,CardMedia,Box,Typography} from '@mui/material'
import '../public/assets/styles/showInfo.css'
class ShowInfo extends Component{
  
      
      render() {
        const date = new Date();
        const day = date.getDate();
        const month = date.toLocaleString('default',{month:'long'});
        const year = date.getFullYear();
        const time = date.toLocaleString('default',{hour:'numeric',minute:'numeric'})
        
        /*const data = this.props.dataToShow;*/
       
        return (
          <div className="infoContainer">
          <div className="allInfo">
                <div className="info">

                    <div className="dateTimeCityCountry">
                      <Typography id="dateTime">{day} {month.charAt(0).toUpperCase()+month.slice(1)} {year},{time}</Typography>
                      <Typography id="cityCountry">{/*data.name*/}Mangualde, PT{/*data.sys.country*/}</Typography>
                    </div>
                    <div>
                      <div className="iconAndTemp">
                        <CardMedia component="img" sx={{height:'50px',width:'50px'}} /*image={require('../public/assets/images/'+data.weather[0].icon+'@2x.png')}*/></CardMedia>
                        <Typography id="temp">{/*Math.round(data.main.temp)*/}20ºC</Typography>
                      </div>
                    </div>
                  </div>
                  

              {/*<Map dataToShow={data}/>*/}
          </div>
            <div className="someParams">
              <Typography className="feels"> <p>Feels</p> {/*Math.round(data.main.feels_like)*/}20ºC</Typography>
              <Typography className ="humidity"> <p>Humidity</p>  {/*Math.round(data.main.humidity)*/}20%</Typography>
              <Typography className="windSpeed"> <p>Wind Speed</p>  {/*Math.round(data.wind.speed)*/}20 m/s</Typography>
            </div>
          </div>
          
        );
      }


}

export default ShowInfo;