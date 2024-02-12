import BoardRoom from "./pages/BoardRoom";
import RoomSelection from "./pages/RoomSelection";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoomSelection />} />
        <Route path="/board/:roomId" element={<BoardRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
