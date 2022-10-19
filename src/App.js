import './App.css';
import React,{useEffect, useState} from "react";
import { Search }  from 'react-bootstrap-icons';
import api from './services/api';
import {Button,Input,InputAdornment,Box} from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowInfo from './components/ShowInfo';
import config from './services/config'



function App() {

  const [data,setData] = useState({});
  const [location, setLocation] = useState('Mangualde');
 
  const searchLocation = (event) => {
    if (event.key === 'Enter')
    {
    handleClick();
  }
  }

  function handleClick() 
  {
    api
    .get("/data/2.5/weather?appid="+config.MY_KEY+"&units=metric&lang=pt",{params :{q: location}})
    .then((response) => {
      setData(response.data);return response.data;})
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }

  useEffect(() =>{handleClick();},[]);
 

  return (
    <div className='App'>
      <div className="App-header">
        <Box id="city">
          <Input id="inputCity"
              disableUnderline="true"
              autoComplete='off'
              name="cityName"
              type="text"
              value={location}
              onKeyPress={searchLocation}
              onChange={event => setLocation(event.target.value)}
              label="City" 
              endAdornment={
                <InputAdornment position="end">
                  <Button style={{padding:0}} onClick={handleClick}><Search style={{color:"white",padding:0}} size={20}/></Button>
                </InputAdornment>
              }
              />
        </Box>
      </div>
    
      <div>
        {data.main ? <ShowInfo dataToShow={data}/>:null}
      </div>
    
    </div>
  );

}



export default App;
