import React, {useEffect} from 'react';
import {getUserGEO, getWeather7Days} from "../../store/OpenWeatherMap/OpenWeatherMapThunks";
import {useDispatch, useSelector} from "react-redux";
import {StyledSidebar} from "./styled";
import Weather from "../Weather";
import {selectCity} from "../../store/Selectors";
import {getWeather7DaysBit} from "../../store/WeatherBit/WeatherBitThunks";

function Sidebar(){
  return <StyledSidebar>
    <Weather/>
  </StyledSidebar>
};

export default Sidebar;
