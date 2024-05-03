import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  // Ім'я слайсу
  name: 'filters',
  // Початковий стан редюсера слайсу
  initialState: { name: '', number: '' },
  // Об'єкт редюсерів
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
      state.number = action.payload;
    },
  },
});

// Генератори екшенів
export const { changeFilter } = filtersSlice.actions;

// Редюсер слайсу
export const FilterReducer = filtersSlice.reducer;
