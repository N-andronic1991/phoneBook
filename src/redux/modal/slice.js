import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  // Ім'я слайсу
  name: 'modal',
  // Початковий стан редюсера слайсу
  initialState: {
    isOpen: false,
  },

  // Об'єкт редюсерів
  reducers: {
    openModal: state => {
      state.isOpen = true;
    },
    closeModal: state => {
      state.isOpen = false;
    },
  },
});

// Генератори екшенів
export const { openModal, closeModal } = modalSlice.actions;

// Редюсер слайсу
export const ModalReducer = modalSlice.reducer;
