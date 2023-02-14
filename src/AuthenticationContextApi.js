import React, { createContext, useEffect, useState } from "react";

export const AuthenticationContext = createContext();

    const AuthenticationProvider = ({ children }) => {
    const isLogIn=Boolean(localStorage.getItem('user-info'))
    const [isLoggedIn, setLogged] = useState(isLogIn);

  return (
    <AuthenticationContext.Provider
      value={{isLoggedIn, setLogged}}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;