import { useLocation } from "react-router-dom";
import HomeBar from "./Topbar/HomeBar";

export default function Topbar() {
  const location = useLocation();

  if (location.pathname === "/") return <HomeBar />;
}
