import {createAsyncThunk} from "@reduxjs/toolkit";
import { setWeather7Days} from "./OpenWeatherMapSlice";
import { v1 as uuidv1 } from 'uuid';

export const getWeather7Days = (createAsyncThunk(
    'weather/getWeather',
    async (userCoordinates,thunkAPI) =>{
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${userCoordinates.latitude}&lon=${userCoordinates.longitude}&units=metric&exclude=hourly,minutely&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`);
        const data = await response.json();
        data.daily.forEach((item)=>{
          item.uniqueID = uuidv1()
        })
        console.log('getWeather7Days')
        thunkAPI.dispatch(setWeather7Days(data))
      }catch (err){
        console.log(err)
      }
    }
))
