export const loginApi = async (credentials) => {
    const response = await fetch('https://yourloginapi.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      throw new Error('Login failed');
    }
    const user = await response.json();
    return { user };
  };
  