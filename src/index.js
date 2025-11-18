import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import paletteReducer from "./features/helpers";

const store = configureStore({
  reducer: {
    foobar: paletteReducer
  }
})

// const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);



