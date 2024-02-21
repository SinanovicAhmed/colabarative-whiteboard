import BoardRoom from "./pages/BoardRoom";
import RoomSelection from "./pages/RoomSelection";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import UserContext from "./context/UserContext";
import { useContext, useEffect, useState } from "react";
import Loading from "./pages/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { handleRefresh } = useContext(UserContext);

  useEffect(() => {
    handleRefresh();
    setIsLoading(false);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/roomselection" element={<RoomSelection />} />
          <Route path="/board/:roomId" element={<BoardRoom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
