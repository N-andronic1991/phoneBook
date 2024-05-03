import { createSelector } from '@reduxjs/toolkit';
import { selectFiltersName, selectFiltersNumber } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFiltersName, selectFiltersNumber],
  (contacts, filtersName, filtersNumber) => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filtersName.toLowerCase()) ||
        contact.number.toLowerCase().includes(filtersNumber.toLowerCase())
    );
  }
);
