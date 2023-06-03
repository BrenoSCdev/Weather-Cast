import {useState} from 'react';
import axios from 'axios';
import WeatherData from './Types/weatherData'
import './styles.css'
import {FaCloudMoon} from  "react-icons/fa"

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
          <div className="container">
            <div className="top">
              <div className="location">
                {data?.name}
              </div>
              <div className="temp">
                {data?.main ? <p>{(data?.main.temp/12).toFixed(0)}°C</p> : null}
              </div>
              <div className="description">
                {data?.weather[0].main === "Clear" ? "Céu aberto" : null}
                {data?.weather[0].main === "moderate rain" ? "Chuva moderada" : null}
                {data?.weather[0].main === "overcast clouds" ? "Nublado" : null}
              </div>
              <h1><FaCloudMoon/>  Climate Pro</h1>
              <input
              type="text"
              placeholder="Digite uma cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={searchLocation}/>
            </div>
 


        {data?.name !== undefined &&
        <div className="bottom">
          <div className="feels">  
          <p>Sensação térmica</p>
            {data?.main ? <p>{(data?.main.feels_like/12).toFixed(0)}°C</p> : null}
          </div>
          <div className="humidity">
          <p>Humidade</p>
            {data?.main ? <p>{data?.main.humidity}%</p> : null}
          </div>
          <div className="wind">
          <p>Velocidade do vento</p>
            {data?.main ? <p>{(data?.wind.speed * 1.6).toFixed(0)}KPH</p> : null}
          </div>
        </div>
        }
    </div> 
 </div>

}

export default App;
