import { Helmet, HelmetProvider } from "react-helmet-async";
import BeforeFooter from "../../components/BeforeFooter/BeforeFooter";
import "./Price.scss";

// Import Swiper React components
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PrimaryButton, TertiaryButton } from "../../components/Button/Button";
import { useState } from "react";
import dataPrice from "../../../public/json/package-data.json";

const Price = () => {
  let [showDetail, setShowDetail] = useState([false, "Lihat Detail Paket"]);
  const toggleDetail = () => {
    if (showDetail[0] === false) {
      setShowDetail([true, "Tutup Detail Paket"]);
    } else {
      setShowDetail([false, "Lihat Detail Paket"]);
    }
  };

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Diggo - Harga</title>
        </Helmet>
        <main>
          {/* contain */}
          <section className="px-3 gap-5 bg-primary-50 pt-40">
            <div className="max-w-screen-xl mx-auto">
              <h3 className="font-bold text-xl md:text-3xl leading-normal text-center mb-10 lg:w-3/4 lg:mx-auto">Biaya Langganan</h3>
              <hr />
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
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
                className="pt-20 pb-5 lg:max-w-7xl price-slider"
              >
                {dataPrice
                  .map((item, i) => {
                    return (
                      <SwiperSlide key={i} className="shadow p-4 rounded-2xl">
                        <div>
                          <p className="text-center">
                            <b className="text-primary">{item.name}</b> <small className="text-rose-400 bg-rose-100 px-1 py-0.5 rounded-lg font-semibold">Hemat {item.discount}</small>
                          </p>
                          <h3 className="font-bold lg:text-xl mb-3 text-center">Paket {item.period}</h3>
                          <p className="text-center mb-3">{item.description}</p>
                          <p className="font-semibold text-center mb-3">Pembayaran {item.period}</p>
                          <div className="text-center mb-1">
                            <h3 className="font-bold text-2xl inline-block text-primary">Rp{item.price.toLocaleString("id", "ID")}</h3>
                            <small className="text-xs">/hari</small>
                          </div>
                          <p className="font-semibold text-center text-sm mb-5">Per Outlet</p>
                          <hr className="mb-3" />
                          <ul className={(showDetail[0] ? "" : "hidden") + ` mb-5 text-xs animate__animated animate__fadeIn`}>
                            {item.details.map((subItem, i) => {
                              return (
                                <li className="mb-2" key={i}>
                                  <i className="fa-solid fa-circle-check text-primary mb-2"></i> {subItem.cat}
                                  {subItem.list.map((listItem, i) => {
                                    return (
                                      <ul key={i}>
                                        <li className="mb-2 ms-2">+ {listItem}</li>
                                      </ul>
                                    );
                                  })}
                                </li>
                              );
                            })}
                            {/* <li className="mb-2">
                            <i className="fa-solid fa-circle-check text-primary"></i> Tablet + Langganan 1 tahun
                          </li>
                          <li className="mb-2">+ Komisi +SplitBill +Struk Digital (WA)</li> */}
                          </ul>
                          <div className="grid grid-cols-1">
                            <PrimaryButton textButton="Pilih Paket" sizeButton="md" link="https://dashboard.diggo.id/login" />
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })
                  .reverse()}
              </Swiper>

              <div className="grid grid-cols-1 pb-20" onClick={() => toggleDetail()}>
                <TertiaryButton textButton={showDetail[1]} sizeButton="md" />
              </div>
            </div>
          </section>

          <BeforeFooter />
        </main>
      </>
    </HelmetProvider>
  );
};
export default Price;
