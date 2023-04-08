import PickCity from '../PickCity/PickCity'
import WeatherSummary from '../WeatherSummary/WeatherSummary'
import Loader from '../Loader/Loader'
import { useCallback, useState } from 'react'
import ErrorBox from '../ErrorBox/ErrorBox'

export interface WeatherDataInterface {
  city: string
  temp: number
  icon: string
  description: string
}

const WeatherBox = (): JSX.Element => {
  const [weatherData, setWeatherData] = useState({
    city: '',
    temp: 0,
    icon: '03d',
    description: '',
  })
  const [pending, setPending] = useState(false)
  const [failure, setFailure] = useState(false)
  const handleCityChange = useCallback((city: string) => {
    setFailure(false)
    setPending(true)
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b63255571dbee48375d31121e6241c45&units=metric`
    ).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          setWeatherData({
            city: data.name,
            temp: data.main.temp,
            icon: data.weather[0].icon,
            description: data.weather[0].main,
          })
        })
      } else {
        setFailure(true)
      }
    })

    setPending(false)
  }, [])
  return (
    <section>
      <PickCity submit={handleCityChange} />
      {weatherData.city !== '' && !failure && (
        <WeatherSummary {...weatherData} />
      )}
      {pending && <Loader />}
      {failure && <ErrorBox />}
    </section>
  )
}

export default WeatherBox
