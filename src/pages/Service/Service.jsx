import { Helmet, HelmetProvider } from "react-helmet-async";
import hero from "../../assets/images/hero.png";
import "./Service.scss";

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

export default function Service() {
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
          {/* all featured */}
          <section className="px-5 md:px-10 pt-40 mb-20 featured">
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

          {/* before footer */}
          <BeforeFooter />
        </main>
      </>
    </HelmetProvider>
  );
}
