import { createSlice } from '@reduxjs/toolkit';
import { initialData } from '../InitialData';

export const paletteSlice = createSlice({
  name: "foobar",
  initialState: { value: initialData },
  reducers: {
    addPalette: (state, action) => {
      state.value.push(action.payload);
    },

    updateTitle: (state, action) => {
      state.value.map(pal => {
        if (pal.id === action.payload.id) {
          return pal.title = action.payload.title;
        }
      })
    },

    deletePane: (state, action) => {
      state.value.map(pane => {
        if (pane.id === action.payload.id) {
          pane.colors = pane.colors.filter((__, index) => index !== action.payload.index);
        }
      });
    },

    addPane: (state, action) => {
      state.value.map(pal => {
        if (pal.id === action.payload.id) {
          return pal.colors.push({ hex: action.payload.color })
        }
      })
    },

    updateColor: (state, action) => {
      state.value.map(pane => {
        if (pane.id === action.payload.id) {
          pane.colors.map((color, index) => {
            if (index === action.payload.index) {
              return color.hex = action.payload.color;
            }
          });
        }
      });
    },
  }
});

export const { addPalette, updateTitle, deletePane, addPane, updateColor } = paletteSlice.actions;
export default paletteSlice.reducer;