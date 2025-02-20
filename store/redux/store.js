import { configureStore } from "reduxjs/toolkit";

import favoriteReducer from "./favorites";

// Import your reducers here
// import someReducer from './reducers/someReducer';

export const store = configureStore({
  reducer: {
    favoriteMeals: favoriteReducer,
  },
});
