import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialData } from '../InitialData';
import { Palette } from '../types'

export const paletteSlice = createSlice({
  name: "foobar",
  initialState: { value: initialData },
  reducers: {
    addPalette: (state, action: PayloadAction<Palette>) => {
      state.value.push(action.payload);
    },

    updateTitle: (state, action: PayloadAction<{ id: string; title: string }>) => {
      state.value.forEach(pal => {
        if (pal.id === action.payload.id) {
          return pal.title = action.payload.title;
        }
      })
    },

    deletePane: (state, action: PayloadAction<{ id: string; index: number }>) => {
      state.value.forEach(pane => {
        if (pane.id === action.payload.id) {
          pane.colors = pane.colors.filter((__, index) => index !== action.payload.index);
        }
      });
    },

    addPane: (state, action: PayloadAction<{ id: string; color: string }>) => {
      state.value.forEach(pal => {
        if (pal.id === action.payload.id) {
          return pal.colors.push({ hex: action.payload.color })
        }
      })
    },

    updateColor: (state, action: PayloadAction<{ id: string; index: number; color: string }>) => {
      state.value.forEach(pane => {
        if (pane.id === action.payload.id) {
          pane.colors.forEach((color, index) => {
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