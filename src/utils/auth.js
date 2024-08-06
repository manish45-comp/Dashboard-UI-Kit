export const rememberUserCredentials = (remember, credentials) => {
  if (remember) {
    localStorage.setItem("rememberMe", "true");
    localStorage.setItem("email", credentials.email);
    localStorage.setItem("password", credentials.password);
  }
  if (!remember) {
    localStorage.removeItem("rememberMe");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  }
};

export const loadUserCredentials = (setValue) => {
  if (localStorage.getItem("rememberMe") === "true") {
    setValue("email", localStorage.getItem("email"));
    setValue("password", localStorage.getItem("password"));
  }
};

export const getRefreshToken = () => localStorage.getItem("refresh");
export const getAccessToken = () => localStorage.getItem("token");
export const setAccessToken = (token) => localStorage.setItem("token", token);
