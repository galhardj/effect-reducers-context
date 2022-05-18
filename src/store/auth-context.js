import React from "react";

const AuthContext = React.createContext({
  // currently, below isLoggedIn's value is not used, 
  // since overridden by the one declared directly in the .Provider (i.e. in App.js)
  isLoggedIn: false,
});

export default AuthContext;
