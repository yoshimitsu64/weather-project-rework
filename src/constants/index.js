export const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
export const months = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December',
];
export const options = [
  { value: 0, label: 'OpenWeatherMap' },
  { value: 1, label: 'WeatherBit' },
];
export const date = new Date();
export const hours = date.getHours();
export const minutes = date.getMinutes();
export const calendarDate = `${days[date.getDay()]}, ${months[date.getMonth()]}, ${date.getFullYear()}`
