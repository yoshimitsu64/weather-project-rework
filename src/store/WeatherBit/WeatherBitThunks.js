import {createAsyncThunk} from "@reduxjs/toolkit";
import {v1 as uuidv1} from "uuid";
import {setWeather7DaysBit} from "./WeatherBitSlice";

export const getWeather7DaysBit = (createAsyncThunk(
    'weather/getWeather',
    async (userCoordinates,thunkAPI) =>{
      try {
        const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${userCoordinates.latitude}&lon=${userCoordinates.longitude}&key=${process.env.REACT_APP_WEATHERBIT_API_KEY}`);
        const data = await response.json();
        data.data.forEach((item)=>{
          item.uniqueID = uuidv1()
        })
        console.log('getWeatherBIT')

        thunkAPI.dispatch(setWeather7DaysBit(data))
      }catch (err){
        console.log(err)
      }
    }
))
