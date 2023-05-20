import axios from "axios";


const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'
const apiKey = '26e47efb2756ac12c10a749aab657e47'

export const getWeather = async (city: string) => {
    try{
        const {data} = await axios.get(baseUrl + `q=${city}&appid=${apiKey}`)
        return data
    }catch(error){
        throw error
    }
    
}

