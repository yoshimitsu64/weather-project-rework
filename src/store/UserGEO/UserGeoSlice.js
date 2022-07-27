import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  city: null,
  country: null
}
const userGEOSlice = createSlice({
  name: 'userGEO',
  initialState:initialState,
  reducers : {
    setGEO : (state, action) => {
      state.city = action.payload.results[0]?.components.city;
      state.country = action.payload.results[0]?.components?.country;
    }
  }
})
export const {setGEO} = userGEOSlice.actions;
export default userGEOSlice.reducer;
