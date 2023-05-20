import React, {useState, useEffect} from 'react';
import { getWeather } from './services';



const App = () => {
const [weather, setWeather] = useState(null)
const [city, setCity] = useState('')

const fetchData = async () => {
    try{
      const data = await getWeather(city)
      console.log(data)
    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchData() 
  },[])
 return <>
    <input
    type='text'
    onChange={(e) => setCity(e.target.value)}/>
    <button onClick={fetchData}/>
 </>
 
}

export default App;
