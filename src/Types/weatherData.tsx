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

export default interface WeatherData {
    name: string,
    main: mainData
    wind: windData
}