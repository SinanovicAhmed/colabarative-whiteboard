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
    setUser({
      name: guestName,
      image: "/images/guestprofile.png",
    });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(null);
  };

  const handleLoginGoogle = (credentialResponse) => {
    const decodedCredentials = jwtDecode(credentialResponse.credential);
    setUser({
      name: decodedCredentials.email,
      image: decodedCredentials.picture,
    });
    setIsLoggedIn(true);
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, isLoggedIn, setIsLoggedIn, handleLoginGuest, handleLoginGoogle, handleLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
