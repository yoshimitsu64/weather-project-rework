import Select from "react-select";
import {useState} from "react";
import {StyledSelect} from "./styled";
import {useDispatch, useSelector} from "react-redux";
import {selectCity, selectWeatherService} from "../../../store/Selectors";
import {setService} from "../../../store/WeatherService/WeatherServiceSlice";
import {options} from "../../../constants";

function Service(){
   const dispatch = useDispatch();
   const service = useSelector(selectWeatherService)

   const handleChange = (e) => {
      dispatch(setService(options[e.value]));
   };
   return  <StyledSelect><Select  value={{ label: `${service?.label}`, value: `${service?.value}` }} options={options} onChange={handleChange}></Select></StyledSelect>
}
export default Service;
