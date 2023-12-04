import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import "./assets/fontawesome/css/all.css";
import "animate.css";

import "swiper/css";
import "swiper/css/navigation";

import AOS from "aos";
import "aos/dist/aos.css";
import Product from "./pages/Product/Product";
import Solution from "./pages/Solution/Solution";
import Package from "./pages/package/Package";
import Service from "./pages/Service/Service";
import Price from "./pages/Price/Price";
import Faq from "./pages/Faq/Faq";
import ErrorPage from "./pages/404/404";

AOS.init({
  once: true,
  duration: 1000,
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layouts />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="produk" element={<Product />} />
      <Route path="solusi" element={<Solution />} />
      <Route path="layanan" element={<Service />} />
      <Route path="harga" element={<Price />} />
      <Route path="paket" element={<Package />} />
      <Route path="faq" element={<Faq />} />
      <Route path="*" element={<ErrorPage />} />
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
