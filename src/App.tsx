import {useState} from 'react';
import axios from 'axios';
import WeatherData from './Types/weatherData'

const App = () => {
const [data, setData] = useState<WeatherData | null>(null)
const [city, setCity] = useState<string>('')

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=26e47efb2756ac12c10a749aab657e47` 
const searchLocation = async (event:React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === "Enter"){
      try{
          axios.get<WeatherData>(url).then((response) => {
            setData(response.data)
          })
      }catch(error){
        //Algum trativo de erro
      }finally{
        setCity('')
      }


    }
  }
  console.log(data)

 return <div className="app">
    <div className="search">
      <input
      type="text"
      placeholder="Digite uma cidade"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      onKeyDown={searchLocation}/>
    </div>

    <div>
      {data?.name}
    </div>
    <div>
    <p>Temperatura</p>
      {data?.main ? <p>{data?.main.temp}°F</p> : null}
    </div>
    <div>
    <p>Humidade</p>
      {data?.main ? <p>{data?.main.humidity}%</p> : null}
    </div>
 </div>

}

export default App;
