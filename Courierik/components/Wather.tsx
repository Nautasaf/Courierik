import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/Index';
import{startSnowfall, startRainfall, stopRainfall, stopSnowfall }from './script/Script'
import '../components/script/styles.scss'

export const WeatherComponent = () => {
  
  const city = useSelector((state: RootState) => state.Login.city);
console.log(city);

  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    if (city) {
      const fetchWeather = async () => {
        try {
          const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=622256b9dda24a82b29124055252801&q=${city}&aqi=no`);
          const data = await response.json();
          setWeather(data);

           
           if (data.current.temp_c <= 0) {
            startSnowfall(); 
            stopRainfall(); 
          } else if (data.current.temp_c > 0 && data.current.temp_c <= 5) {
            startRainfall(); 
            stopSnowfall(); 
          } else {
            stopSnowfall(); 
            stopRainfall(); 
          }

          
        } catch (error) {
          console.error("Ошибка при получении погоды:", error);
        }
      };

      fetchWeather();
    }
  }, [city]); 

  return (
   <>
      {weather ? (
          <p>{city} {weather.current.temp_c}°C</p>
      ) : (
        <p>Не удалось получить данные о погоде.</p>
      )}
  </>
  );
};