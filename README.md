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
KEY = appid=$API_KEY&
DOMAIN = "https://openweathermap.org"
URL_DATA = $DOMAIN/data/2.5
VITE_API_ONECALL = $URL_DATA/onecall?$KEY
VITE_API_FIND  = $URL_DATA/find?$KEY
VITE_API_IMG = $DOMAIN/img/wn
VITE_API_IMAGE_FLAGS = $DOMAIN/images/flags
```

You can change the version of your API key.

- Then run the application

```cmd
yarn dev
```
