import { Helmet, HelmetProvider } from "react-helmet-async";
import hero from "../../assets/images/hero.png";
import "./Home.scss";

import { TertiaryButton } from "../../components/Button/Button";
import BeforeFooter from "../../components/BeforeFooter/BeforeFooter";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// image
import backgroundJumbotron from "../../assets/images/background-jumbotron.png";
import featuredFashion from "../../assets/images/featured-fashion.png";
import featuredTokoRetail from "../../assets/images/featured-toko-retail.png";
import featuredAutocare from "../../assets/images/featured-autocare.png";
import featuredLaundry from "../../assets/images/featured-laundry.png";
import featuredFoodAndBeverage from "../../assets/images/featured-food-and-beverage.png";
import featuredOnlineShop from "../../assets/images/featured-online-shop.png";
import featuredBarbershop from "../../assets/images/featured-barbershop.png";
import featuredAllServices from "../../assets/images/featured-all-services.png";
import values1 from "../../assets/images/values-1.svg";
import values2 from "../../assets/images/values-2.svg";
import values3 from "../../assets/images/values-3.svg";

export default function Home() {
  let dataRetail = [
    {
      name: "Fashion",
      image: featuredFashion,
    },
    {
      name: "Toko Retail",
      image: featuredTokoRetail,
    },
    {
      name: "Autocare",
      image: featuredAutocare,
    },
    {
      name: "Laundry",
      image: featuredLaundry,
    },
    {
      name: "Food & Beverage",
      image: featuredFoodAndBeverage,
    },
    {
      name: "Online Shop",
      image: featuredOnlineShop,
    },
    {
      name: "Barbershop",
      image: featuredBarbershop,
    },
    {
      name: "Berbagai Layanan",
      image: featuredAllServices,
    },
  ];

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Diggo | Aplikasi Kasir Indonesia</title>
        </Helmet>
        <main>
          {/* jumbotron */}
          <section className="h-screen relative overflow-hidden" style={{ backgroundImage: `url(${backgroundJumbotron})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="jumbotron absolute h-full top-0 bottom-10 left-0 right-0 flex flex-col lg:flex-row items-center justify-center lg:justify-around gap-5 md:gap-20 lg:gap-10 px-5 lg:px-10 pt-32 lg:py-32">
              <div className="text-white w-full lg:w-1/2">
                <h2 className="font-bold text-2xl md:text-4xl leading-normal mb-3">Aplikasi Pendukung UMKM Paling Murah Dengan Fitur Berkelas</h2>
                <p className="leading-normal text-sm md:text-base">Satu aplikasi banyak dengan multi fungsi, satu harga murah untuk semua kebutuhan UMKM Anda</p>
                <div className="flex flex-wrap gap-3 my-5 md:w-5/12 lg:w-6/12">
                  <div className="badge bg-fuchsia-600 text-white border-fuchsia-600 badge-lg rounded-none">Kasir Online</div>
                  <div className="badge bg-red-600 text-white border-red-600 badge-lg rounded-none">Aplikasi Owner</div>
                  <div className="badge bg-indigo-600 text-white border-indigo-600 badge-lg rounded-none">Inventori</div>
                  <div className="badge bg-lime-600 text-white border-lime-600 badge-lg rounded-none">Kasir Online</div>
                </div>
                <TertiaryButton textButton="Daftar Gratis" sizeButton="btn-md" />
              </div>
              <div className="flex justify-center w-full lg:w-1/2 pb-3 md:pb-0">
                <img src={hero} className="object-cover aspect-auto max-w-xs md:max-w-md lg:max-w-lg animate__animated animate__fadeInRight" alt="hero" />
              </div>
            </div>
          </section>

          {/* all featured */}
          <section className="px-5 md:px-10 pt-20 featured">
            <h3 className="font-bold text-xl md:text-3xl leading-normal text-center mb-3">Apapun bisnismu pakai Diggo jadi lebih mudah</h3>
            <p className="leading-normal text-sm md:text-base text-center mb-10">Ragam fitur dapat mendukung berbagi jenis bisnismu</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5" data-aos="fade-in">
              {dataRetail.map((item, i) => {
                return (
                  (
                    <div key={i} className="aspect-video text-xs md:text-base hover:text-xs text-white flex justify-center items-center rounded-2xl relative overflow-hidden item" style={{ backgroundImage: `url(${item.image})` }}>
                      <p>{item.name || <Skeleton />}</p>
                    </div>
                  ) || <Skeleton />
                );
              })}
            </div>
          </section>

          {/* value */}
          <section className="px-5 md:px-10 mt-20 pt-20 pb-10 values">
            <h3 className="font-bold text-xl md:text-3xl leading-normal text-center mb-10 lg:w-3/4 lg:mx-auto">Kelola Bisnis UMKM dengan aplikasi yang tepat kelola usaha jadi mudah dan murah</h3>
            <div className="grid grid-cols-1 lg:grid-cols-8 py-3 text-xs md:text-base">
              <div className="shadow-lg m-3 py-10 md:py-20 rounded-3xl px-5 lg:col-start-2 col-span-2" data-aos="zoom-in" data-aos-delay="50">
                <img src={values1} className="w-20 object-contain mx-auto mb-10" alt="Satu Aplikasi Lengkap" />
                <h4 className="text-center font-bold mb-3 text-xl">Satu Aplikasi Lengkap</h4>
                <p className="text-center">Berbagai solusi untuk mengelola berbagai bisnis Anda</p>
              </div>
              <div className="shadow-lg m-3 py-10 md:py-20 rounded-3xl px-5 col-span-2" data-aos="zoom-in" data-aos-delay="150">
                <img src={values2} className="w-20 object-contain mx-auto mb-10" alt="Hai! Diggo 24 Jam" />
                <h4 className="text-center font-bold mb-3 text-xl">Hai! Diggo 24 Jam</h4>
                <p className="text-center">Bantuan untuk bisnismu di setiap waktu dengan layanan Hai! DIGGO</p>
              </div>
              <div className="shadow-lg m-3 py-10 md:py-20 rounded-3xl px-5 col-span-2" data-aos="zoom-in" data-aos-delay="300">
                <img src={values3} className="w-20 object-contain mx-auto mb-10" alt="Pilihan Utama Segala Usaha" />
                <h4 className="text-center font-bold mb-3 text-xl">Pilihan Utama Segala Usaha</h4>
                <p className="text-center">DIGGO bersama ribuan UMKM Indonesia</p>
              </div>
            </div>
          </section>

          {/* before footer */}
          <BeforeFooter />
        </main>
      </>
    </HelmetProvider>
  );
}
