import { configureStore } from '@reduxjs/toolkit';
import paletteReducer from './features/helpers';

export const store = configureStore({
  reducer: {
    palettes: paletteReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;