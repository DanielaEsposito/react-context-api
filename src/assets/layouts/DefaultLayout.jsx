import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function DefaultLayout() {
  return (
    <div className="wrapper">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer-page">
        <div className="container">footer</div>
      </footer>
    </div>
  );
}
