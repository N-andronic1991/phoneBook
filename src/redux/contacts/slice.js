import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { apiGetContacts, apiAddContact, apiDeleteContact } from './operations';

const INITIAL_STATE = {
  items: null,
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,

  extraReducers: builder => {
    builder
      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })

      .addCase(apiAddContact.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
        state.error = null;
        state.items = [...state.items, action.payload];
      })

      .addCase(apiDeleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })

      .addMatcher(
        isAnyOf(
          apiGetContacts.pending,
          apiAddContact.pending,
          apiDeleteContact.pending
        ),
        state => {
          state.loading = true;
          state.error = null;
        }
      )

      .addMatcher(
        isAnyOf(
          apiGetContacts.rejected,
          apiAddContact.rejected,
          apiDeleteContact.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

// Редюсер слайсу
export const ContactReducer = contactsSlice.reducer;
