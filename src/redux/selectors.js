export const getContacts = state => state.contacts.contacts.items;

export const getFilterState = state => state.filter.filter;

export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUserName = state => state.auth.user.name;
