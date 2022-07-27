import {combineReducers, configureStore} from "@reduxjs/toolkit";
import openWeatherMapReducer from "./OpenWeatherMap/OpenWeatherMapSlice";
import weatherBitReducer from './WeatherBit/WeatherBitSlice'
import weatherServiceReducer from './WeatherService/WeatherServiceSlice'
import userGEOReducer from './UserGEO/UserGeoSlice'
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const openWeatherMapConfig = {
  key:'OpenWeatherMap',
  storage,
}
const weatherBitConfig = {
  key:'WeatherBit',
  storage,
}
const weatherServiceConfig = {
  key:'WeatherService',
  storage
}
const userGEOConfig = {
  key : 'userGEO',
  storage
}
const rootReducer = combineReducers({
  openWeatherMap:persistReducer(openWeatherMapConfig,openWeatherMapReducer),
  weatherBit:persistReducer(weatherBitConfig, weatherBitReducer),
  weatherService:persistReducer(weatherServiceConfig, weatherServiceReducer),
  userGEO : persistReducer(userGEOConfig, userGEOReducer)
})
const store = configureStore({
  reducer:rootReducer,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
})
export const persistor = persistStore(store)
export default store;
