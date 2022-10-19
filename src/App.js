import './App.css';
import React,{useState} from "react";
import { Search }  from 'react-bootstrap-icons';
import api from './services/api';
import { TextField, Button,Input,InputAdornment,Box, IconButton} from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import { GithubPicker } from 'react-color';
import ShowInfo from './components/ShowInfo';



function App() {

  const [data,setData] = useState({});
  const [location, setLocation] = useState('Mangualde');
 
  const searchLocation = (event) => {
    if (event.key === 'Enter')
    {
    onSubmit();
  }
  }


  function onSubmit() 
  {

    api
    .get("/data/2.5/weather?appid=ee9af5e146c23d7e93c6e5de8c71fa5c&units=metric&lang=pt",{params :{q:location}})
    .then((response) => {
      setData(response.data);return response.data;})
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
    
  }
 

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
                  <Button style={{padding:0}} onClick={onSubmit}><Search style={{color:"white",padding:0}} size={20}/></Button>
                </InputAdornment>
              }
              />
        </Box>
      </div>
    
      <div>
        {/*data.main ? <ShowInfo dataToShow={data}/>:null*/}
        {<ShowInfo/>}
      </div>
    
    </div>
  );

}



export default App;
