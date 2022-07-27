import {createAsyncThunk} from "@reduxjs/toolkit";
import {setGEO} from './UserGeoSlice';

export const getUserGEO = (createAsyncThunk(
    'userGEO/getUserGEO',
    async (userCoordinates,thunkAPI)=>{
      try {
        const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${userCoordinates.latitude},${userCoordinates.longitude}&key=${process.env.REACT_APP_OPENCAGEDATA_API_KEY}&language=en`);
        const data = await response.json();
        thunkAPI.dispatch(setGEO(data));
        console.log('getusergeo')
      } catch (err) {
        console.log(err);
      }
    },
));
