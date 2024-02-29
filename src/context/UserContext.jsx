import { jwtDecode } from "jwt-decode";
import { createContext, useState } from "react";

const UserContext = createContext({
  user: null,
  setUser: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginGuest = () => {
    const guestName = `guest-${Math.random().toString(36).substring(2, 7)}`;
    const userData = {
      name: guestName,
      image: "/images/guestprofile.png",
    };
    setUser(userData);
    setIsLoggedIn(true);

    sessionStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLoginGoogle = (credentialResponse) => {
    const decodedCredentials = jwtDecode(credentialResponse.credential);
    const userData = {
      name: decodedCredentials.email,
      image: decodedCredentials.picture,
    };
    setUser(userData);
    setIsLoggedIn(true);

    sessionStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    sessionStorage.removeItem("user");
  };

  const handleRefresh = () => {
    const storedUser = sessionStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        handleLoginGuest,
        handleLoginGoogle,
        handleLogout,
        handleRefresh,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
