import BoardRoom from "./pages/BoardRoom";
import RoomSelection from "./pages/RoomSelection";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
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
