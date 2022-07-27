import {createSlice} from "@reduxjs/toolkit";

const initialstate = {
  weather7days: null,
};

const openWeatherMapSlice = createSlice({
  name:'openWeatherMap',
  initialState:initialstate,
  reducers:{
    setWeather7Days: (state, action) => {
      state.weather7days = action.payload.daily.filter((value, index) => index < 7);
    }
  }
})
export const {setWeather7Days} = openWeatherMapSlice.actions;
export default openWeatherMapSlice.reducer;
