import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./pages/footer/Footer";
import Home from "./pages/home/Home";
import Navbar from "./pages/navbar/Navbar";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
