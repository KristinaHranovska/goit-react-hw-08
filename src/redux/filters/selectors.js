import { createSelector } from "@reduxjs/toolkit";
import { selectItems } from "../contacts/selectors";

export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector([selectNameFilter, selectItems], (filterContacts, contacts) => {
    if (contacts.length === 0) {
        return contacts;
    } else {
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filterContacts.trim().toLowerCase())
        )
    }
}
);