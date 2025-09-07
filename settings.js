import dotenv from 'dotenv';
dotenv.config();

export default {
  // Get API key from https://home.openweathermap.org/users/sign_up
  appid: process.env.WEATHER_API_TOKEN, //replace with quotes
  units: "metric",
  location: "sofia,bg"
};
