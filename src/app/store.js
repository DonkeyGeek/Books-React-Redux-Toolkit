import { configureStore } from '@reduxjs/toolkit';
import libraryReducer from '../features/library/librarySlice'
import bookSliceReducer from '../features/fetchBooks/fetchBooksSlice';

export const store = configureStore({
  reducer: {
    library: libraryReducer,
    search: bookSliceReducer
  },
});
