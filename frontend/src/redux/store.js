// store.js

import { configureStore } from '@reduxjs/toolkit';
import triviaReducer from './features/triviaSlice';

export default configureStore({
  reducer: {
    trivia: triviaReducer,
  },
});
