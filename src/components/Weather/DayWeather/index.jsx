import {StyledDayWeather} from "./styled";
function  DayWeather({temperature, icon}){
  return <StyledDayWeather>
    <img src={icon} alt="didnt load"/>
    {Math.round(temperature)}
  </StyledDayWeather>
}
export default DayWeather;
