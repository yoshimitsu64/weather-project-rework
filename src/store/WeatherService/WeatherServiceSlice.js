import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  service: { value: 0, label: 'OpenWeatherMap' }
}

const serviceSlice = createSlice({
  name: 'service',
  initialState:initialState,
  reducers: {
    setService: (state, action) =>{
      state.service = action.payload
    }
  }
})
export const {setService} = serviceSlice.actions;
export default serviceSlice.reducer;
