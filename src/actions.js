export const login = (credentials) => ({
    type: 'LOGIN',
    payload: credentials,
  });
  
  export const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user,
  });
  
  export const loginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: error,
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });
  