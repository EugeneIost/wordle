import { configureStore } from '@reduxjs/toolkit';
import wordSlice from './wordSlice';

const store = configureStore({
  reducer: {
    word: wordSlice.reducer,
  },
});

export default store;
