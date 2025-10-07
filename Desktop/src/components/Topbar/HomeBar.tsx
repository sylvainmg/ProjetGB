import { useState } from "react";

const borderAnimation =
  "relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full";

export default function HomeBar() {
  const [active, setActive] = useState({
    clients: true,
    bookings: false,
    hotels: false,
    flights: false,
  });

  return (
    <div className="text-white h-full flex flex-row items-center justify-center gap-15">
      <div
        className={`${active.clients ? "border-b-2 border-white" : borderAnimation} p-2 hover:bg-gray-200/10 transition-colors duration-300`}
        onClick={() =>
          setActive({
            clients: true,
            bookings: false,
            hotels: false,
            flights: false,
          })
        }
      >
        Clients
      </div>
      <div
        className={`${active.bookings ? "border-b-2 border-white" : borderAnimation} p-2 hover:bg-gray-200/10 transition-colors duration-300`}
        onClick={() =>
          setActive({
            clients: false,
            bookings: true,
            hotels: false,
            flights: false,
          })
        }
      >
        Réservations
      </div>
      <div
        className={`${active.hotels ? "border-b-2 border-white" : borderAnimation} p-2 hover:bg-gray-200/10 transition-colors duration-300`}
        onClick={() =>
          setActive({
            clients: false,
            bookings: false,
            hotels: true,
            flights: false,
          })
        }
      >
        Hôtels
      </div>
      <div
        className={`${active.flights ? "border-b-2 border-white" : borderAnimation} p-2 hover:bg-gray-200/10 transition-colors duration-300`}
        onClick={() =>
          setActive({
            clients: false,
            bookings: false,
            hotels: false,
            flights: true,
          })
        }
      >
        Vols
      </div>
    </div>
  );
}
