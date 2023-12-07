import { Helmet, HelmetProvider } from "react-helmet-async";
import BeforeFooter from "../../components/BeforeFooter/BeforeFooter";
import "./Package.scss";

// Import Swiper React components
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PrimaryButton } from "../../components/Button/Button";

const Package = () => {
  let dataDummy = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Diggo - Paket</title>
        </Helmet>
        <main>
          {/* contain */}
          <section className="px-5 md:px-10 gap-5 bg-primary-50 pt-40">
            <h3 className="font-bold text-xl md:text-3xl leading-normal text-center mb-3 lg:w-3/4 lg:mx-auto">Paket Langganan</h3>
            <p className="text-center mb-10 opacity-80">Diggo Menghadirkan Pengalaman Berlangganan yang Luar Biasa dengan Paket Langganan Inovatifnya</p>
            <hr />
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              scrollbar={{ draggable: true }}
              className="py-20 lg:max-w-7xl package-slider"
            >
              {dataDummy.map((item, i) => {
                return (
                  <SwiperSlide key={i} className="shadow p-4 rounded-2xl">
                    <div>
                      <img src="https://source.unsplash.com/featured?premium" className="object-cover aspect-video rounded-2xl w-80 mb-5" alt="image" />
                      <h3 className="font-bold lg:text-xl mb-5">Diggo Paket Premium</h3>
                      <ul className="mb-5">
                        <li>
                          <i className="fa-solid fa-circle-check text-green-500"></i> Tablet + Langganan 1 tahun
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check text-green-500"></i> Tablet + Langganan 1 tahun
                        </li>
                      </ul>
                      <div className=" grid grid-cols-1">
                        <PrimaryButton textButton="Beli Paket" sizeButton="md" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </section>

          <BeforeFooter />
        </main>
      </>
    </HelmetProvider>
  );
};
export default Package;
