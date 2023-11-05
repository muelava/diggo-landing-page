import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function Layouts() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
