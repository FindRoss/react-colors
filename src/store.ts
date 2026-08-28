import { combineReducers, configureStore } from '@reduxjs/toolkit';
import paletteReducer from './features/helpers';
import { loadState, saveState } from './localStorage';

const rootReducer = combineReducers({
  palettes: paletteReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState()
});

store.subscribe(() => {
  saveState(store.getState());
});