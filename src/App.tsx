import {useState, useEffect} from 'react';
import axios from 'axios';
import { TextField } from '@mui/material';

const App = () => {
const [data, setData] = useState({})
const [city, setCity] = useState<string>('')

const url = `https://api.openweathermap.org/data/2.5/weather?q=Anapolis&appid=26e47efb2756ac12c10a749aab657e47` 
const searchLocation = async (event:React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === "Enter"){
      try{
          axios.get(url).then((response) => {
            console.log(response.data)
          })
      }catch(error){

      }finally{
        setCity('')
      }


    }
  }

 return <>
    <TextField
    type="text"
    placeholder="Digite uma cidade"
    value={city}
    onChange={(e) => setCity(e.target.value)}
    onKeyDown={searchLocation}/>
 </>
}

export default App;
