const defaultState = {
    cityData: {
        name: "Paradise",
        lat: "100",
        lon: "100",
        pressure: "Perfect",
        temp: "75",
        max: "80",
        min: "70",
        humidity: "45",
        wind: "5",
        icon: "http://openweathermap.org/img/w/01d.png",
        error: false
    },
    searchHistory: []
  };
  
  export default function CitySelectReducer (state = defaultState, action) {
   
    const { type, payload } = action;
  
    switch (type) {
      
      
  
      case 'GET_WEATHER_FULFILLED': {
        return {
          ...state,
          cityData: payload
        };
      }
      case 'GET_WEATHER_REJECTED': {
        return {
          ...state,
          error: true
        };
      }
      case 'UPDATE_SEARCH_HISTORY': {
        return {
          ...state,
          searchHistory: [...state.searchHistory,payload]
        };
      }


  
      default: {
        return state;
      }
    }
  }