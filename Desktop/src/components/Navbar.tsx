import { BiBarChart } from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import logo from "../assets/traveler-nobg.png";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <>
      <div className="text-white">
        <div className="col-span-1 flex justify-start mt-3">
          <img src={logo} alt="" className="w-full" />
        </div>
      </div>
      <div className="h-screen text-white divide-y-2 divide-gray-400/30 flex flex-col justify-center items-center p-6">
        <Link
          to="/"
          className={`flex flex-col py-4 w-full items-center hover:bg-gray-200/10 transition-colors duration-200 ${location.pathname === "/" ? "bg-gray-400/20" : ""}`}
        >
          <div className="flex flex-row items-center gap-2 shadow">
            <BiBarChart className="text-3xl" />
            <div className="shadow-white">Tableau de bord</div>
          </div>
        </Link>
        <Link
          to="/clients"
          className={`flex flex-col py-4 w-full items-center hover:bg-gray-200/10 transition-colors duration-200 ${location.pathname === "/clients" ? "bg-gray-400/20" : ""}`}
        >
          <div className="flex flex-row items-center gap-2 shadow">
            <FaIcons.FaUser className="text-xl" />
            <div className="shadow-white">Clients</div>
          </div>
        </Link>
        <Link
          to="/bookings"
          className={`flex flex-col py-4 w-full items-center hover:bg-gray-200/10 transition-colors duration-200 ${location.pathname === "/bookings" ? "bg-gray-400/20" : ""}`}
        >
          <div className="flex flex-row items-center gap-2">
            <FaIcons.FaCalendarCheck className="text-xl" />
            Réservations
          </div>
        </Link>
        <Link
          to="/hotels"
          className={`flex flex-col py-4 w-full items-center hover:bg-gray-200/10 transition-colors duration-200 ${location.pathname === "/hotels" ? "bg-gray-400/20" : ""}`}
        >
          <div className="flex flex-row items-center gap-2">
            <FaIcons.FaHotel className="text-xl" />
            Hôtels
          </div>
        </Link>
        <Link
          to="/flights"
          className={`flex flex-col py-4 w-full items-center hover:bg-gray-200/10 transition-colors duration-200 ${location.pathname === "/flights" ? "bg-gray-400/20" : ""}`}
        >
          <div className="flex flex-row items-center gap-2">
            <FaIcons.FaPlane className="text-xl" />
            Vols
          </div>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
