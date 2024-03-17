export const selectItems = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectContacts = state => state.contacts;
// export const selectIsAdding = state => state.contacts.isAdding;
// export const selectDeletingItem = state => state.contacts.deletingItem;

// export const selectUpdatingItem = state => {
//     const { items, updatingItem } = state.contacts;
//     return items.find(item => item.id === updatingItem) || null;
// };