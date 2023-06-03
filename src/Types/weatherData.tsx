interface mainData {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
}

interface windData {
    speed: number,
    deg: number
}

interface weatherInfo {
    main: string,
    description: string
}

export default interface WeatherData {
    name: string,
    main: mainData
    wind: windData
    weather: Array<weatherInfo>
}