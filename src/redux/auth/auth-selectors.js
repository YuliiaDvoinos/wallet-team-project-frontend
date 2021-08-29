// get is authenticated
export const getIsAuthenticated = state => state.auth.isAuthenticated;

// get username
export const getUsername = state => state.auth.user.name;

//get userBalance
export const getUserBalance = state => state.auth.user.balance;
