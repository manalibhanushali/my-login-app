const initialState = {
    isLoggedIn: false,
    user: null,
    error: null,
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          isLoggedIn: true,
          user: action.payload.user,
          error: null,
        };
      case 'LOGIN_ERROR':
        return {
          isLoggedIn: false,
          user: null,
          error: action.payload.error,
        };
      case 'LOGOUT':
        return initialState;
      default:
        return state;
    }
  };
  
  export default loginReducer;
  