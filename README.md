# Weather Forecast

This is an application providing weather forecast based on [OnWeatherMap](https://openweathermap.org) open API.

To using this application, follow these steps:

- Install required packages

```cmd
yarn
```

- Create .env file containing these environment variables:
  - API_KEY: Containing your API key from [OnWeatherMap](https://openweathermap.org)
  - Then add these variables:

```cmd
VITE_K = appid=$VITE_AK&
VITE_DOMAIN_API = https://api.openweathermap.org
VITE_URL_DATA = $VITE_DOMAIN_API/data/3.0
VITE_API_ONECALL = $VITE_URL_DATA/onecall?$VITE_K
VITE_URL_GEO = $VITE_DOMAIN_API/geo/1.0
VITE_API_GEO_DIRECT  = $VITE_URL_GEO/direct?$VITE_K
VITE_API_IMG = https://openweathermap.org/img/wn
VITE_API_IMAGE_FLAGS = https://openweathermap.org/images/flags
```

You can change the version of your API key.

- Then run the application

```cmd
yarn dev
```
