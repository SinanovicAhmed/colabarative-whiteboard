import BoardRoom from "./pages/BoardRoom";
import RoomSelection from "./pages/RoomSelection";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/roomselection" element={<RoomSelection />} />
        <Route path="/board/:roomId" element={<BoardRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
