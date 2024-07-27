import { Route, Routes } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Dashboard from "./components/common/Dashboard";
import Diabetes from "./pages/Diabetes";
import Heart from "./pages/Heart";
import Liver from "./pages/Liver";
import Home from "./pages/Home";
import Parkinson from "./pages/Parkinson";
import "./App.css";

function App() {
  return (
    <div className="w-screen min-h-screen  flex flex-col font-inter ">
      <Navbar />

      {/* Routes for disease */}
      <Routes>
        <Route element={<Dashboard />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/heart" element={<Heart />} />
          <Route path="/dashboard/liver" element={<Liver />} />
          <Route path="/dashboard/diabetes" element={<Diabetes />} />
          <Route path="/dashboard/parkinson" element={<Parkinson />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
