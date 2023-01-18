export const saveUserTokensInLocalStorage = (tokens) => {
  localStorage.setItem('accessToken',  JSON.stringify(tokens.access));
  localStorage.setItem('refreshToken', JSON.stringify(tokens.refresh));
};

export const removeAuthTokens = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};
