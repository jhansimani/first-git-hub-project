import { createContext, useState } from "react";
// as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});
// it is a actual component , we need to return provider
// every context we build there is .provider associated with it
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}> {children}</UserContext.Provider>;
};
