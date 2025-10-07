import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import Clients from "./pages/Clients";
import Bookings from "./pages/Bookings";
import Hotels from "./pages/Hotels";
import Flights from "./pages/Flights";

function App() {
  return (
    <div className="bg-gradient-to-bl from-gray-800 via-gray-800 to-gray-800 w-screen h-screen fixed overflow-hidden selection:bg-pink-500">
      <BrowserRouter>
        <div className="grid grid-cols-[250px_1fr] h-full">
          <aside>
            <Navbar />
          </aside>

          <div className="grid grid-rows-[80px_1fr] h-full w-full">
            <aside>
              <Topbar />
            </aside>

            <main className="w-full h-full shadow-2xl no-scrollbar rounded-l-4xl bg-gradient-to-bl from-gray-900 via-gray-900 to-gray-800 p-12 flex flex-col">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/hotels" element={<Hotels />} />
                <Route path="/flights" element={<Flights />} />
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
