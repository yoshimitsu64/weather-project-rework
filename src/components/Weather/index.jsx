import {StyledWeather} from "./styled";
import {
  selectWeather7Days,
  selectWeather7DaysBit,
  selectWeatherService
} from "../../store/Selectors";
import {useDispatch, useSelector} from "react-redux";
import DayWeather from "./DayWeather";
import { getWeather7Days} from "../../store/OpenWeatherMap/OpenWeatherMapThunks";
import { getWeather7DaysBit} from "../../store/WeatherBit/WeatherBitThunks";
import {getUserGEO} from "../../store/UserGEO/UserGeoThunks";
import {useEffect} from "react";

function Weather(){
  const dispatch = useDispatch();

  const weather7Days = useSelector(selectWeather7Days)

  const weather7DaysBit = useSelector(selectWeather7DaysBit)

  const service = useSelector(selectWeatherService)

  function getCoordinates() {
    navigator.geolocation.getCurrentPosition(
        (position) => {
          dispatch(getUserGEO(position.coords));
          service?.label === 'OpenWeatherMap' ? dispatch(getWeather7Days(position.coords)) : dispatch(getWeather7DaysBit(position.coords));
        },
    );
  }
  useEffect(()=> {
    console.log(service?.label)
      switch (service?.label) {
        case 'OpenWeatherMap':
          !weather7Days && getCoordinates();
          break;
        case 'WeatherBit':
          !weather7DaysBit && getCoordinates();
          break;
        default:
          console.log('no one service hasnt been chosen')
      }
  },[service?.label])
  return <StyledWeather>
    {service?.label === 'OpenWeatherMap' ? weather7Days?.map((weekday,index) => (
        <DayWeather service={service}  key={weekday?.uniqueID} temperature={weekday?.temp.day} icon={`http://openweathermap.org/img/wn/${weekday?.weather[0].icon}@2x.png`}/>
    )) : weather7DaysBit?.map((weekday, index) => (
      <DayWeather service={service} key={weekday?.uniqueID} temperature={weekday?.temp} icon={`https://www.weatherbit.io/static/img/icons/${weather7DaysBit[index]?.weather?.icon}.png`} alt="didnt load"/>
    ))}
  </StyledWeather>
}
export default Weather;
