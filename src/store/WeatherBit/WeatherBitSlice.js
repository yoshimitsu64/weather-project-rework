import { createSlice } from '@reduxjs/toolkit';

const initialstate = {
  weather7days: null,
};

const weatherBitSlice = createSlice({
  name: 'weatherBit',
  initialState: initialstate,
  reducers: {
    setWeather7DaysBit: (state, action) => {
      state.weather7days = action.payload.data.filter((value, index) => index < 7);
    },
  },
});
export const {setWeather7DaysBit } = weatherBitSlice.actions;
export default weatherBitSlice.reducer
