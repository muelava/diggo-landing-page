import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import "./assets/fontawesome/css/all.css";
import "animate.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  once: true,
  duration: 1000,
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layouts />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
