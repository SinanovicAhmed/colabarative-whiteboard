import { useContext } from "react";
import UserContext from "../context/UserContext";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const LandingNavbar = () => {
  const { user, isLoggedIn, handleLoginGuest, handleLoginGoogle, handleLogout } = useContext(UserContext);
  const navigate = useNavigate();

  const loginGuest = () => {
    handleLoginGuest();
    navigate("/roomselection");
  };

  const loginGoogle = (credentialResponse) => {
    handleLoginGoogle(credentialResponse);
    navigate("/roomselection");
  };

  return (
    <nav className="sticky top-0 z-20 shadow-md w-full flex justify-center bg-white px-5 sm:px-10 md:px-20 py-1">
      <div className="w-full flex justify-between items-center max-w-[1250px]">
        <img src="/images/websitelogo.png" width={50} height={50} alt="website logo" />
        {!isLoggedIn ? (
          <span className="flex items-center gap-2 md:gap-6">
            <button
              onClick={loginGuest}
              className="text-gray-900 font-medium text-sm md:text-base px-3 py-1 hover:text-gray-500"
            >
              Continue as guest
            </button>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                loginGoogle(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </span>
        ) : (
          <span className="flex items-center gap-6">
            <button onClick={handleLogout} className="text-gray-800 font-semibold hover:text-gray-300">
              Sign out
            </button>
            <img className="rounded-full" src={user.image} alt="user profile picture" width={40} height={40} />
          </span>
        )}
      </div>
    </nav>
  );
};

export default LandingNavbar;
