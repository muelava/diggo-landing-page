import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { PrimaryButton } from "../../components/Button/Button";
import heroDetail from "../../assets/images/hero-detail.png";
import valueDetail from "../../assets/images/value-detail.png";
import iconCheck from "../../assets/icons/check-circle.svg";
import ErrorPage from "../404/404";

const Details = () => {
  let { slug } = useParams();

  let data = [{ slug: "toko-retail" }, { slug: "bisnis-dan-jasa" }, { slug: "food-and-beverages" }, { slug: "enterprise" }];
  let result = data.filter((item) => item.slug === slug);
  result = result.length ? result : false;

  let title = slug
    .replaceAll("-", " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Solusi - {title}</title>
        </Helmet>
        {result ? (
          <main>
            {/* breadcrumb */}
            <div className="max-w-screen-xl mx-auto">
              <div className="text-xs mb-8 flex items-center gap-2 pt-32 mx-5">
                <Link to="/solusi" className="hover:text-primary">
                  Solusi
                </Link>
                <i className="fa-solid fa-chevron-right fa-xs opacity-60"></i> <b className="text-primary">{title}</b>
              </div>
            </div>

            {/* contain */}
            <section className="px-5 pb-20 flex flex-col md:flex-row items-center gap-5 lg:gap-10 max-w-screen-xl mx-auto">
              <div className="lg:w-1/2">
                <p className="font-bold text-xl text-primary">{title}</p>
                <h4 className="font-bold text-3xl lg:text-5xl" style={{ lineHeight: "1.5" }}>
                  Kehadiran Kami
                  <br className="hidden lg:block" />
                  Membantu Meningkatkan
                  <br className="hidden lg:block" />
                  Omset Bisnis Anda
                </h4>
                <div className="mb-5">
                  <svg className=" w-4/5 max-w-md" height="34" viewBox="0 0 487 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 30C73.6307 10.3798 266.914 -17.0885 483 30" stroke="#469DF1" strokeWidth="8" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="mb-5">
                  Let`s make your work more organize and easily using the
                  <br className="hidden lg:block" /> Taskio Dashboard with many of the latest featuresin
                </p>

                <div className="flex gap-3">
                  <PrimaryButton textButton="Coba Trial" sizeButton="btn-md" />
                  <button className="btn btn-md bg-transparent border-none rounded-full hover:bg-sky-50 hover:bg-opacity-70 hover:border-none hover:text-primary transition-all duration-300 normal-case font-normal">
                    <i className="fa-light fa-circle-play fa-2xl"></i>
                    View Demo
                  </button>
                </div>
              </div>
              <img src={heroDetail} className="w-72 lg:w-2/5 object-contain" alt="" data-aos="flip-left" />
            </section>

            <section className="px-3 mb-20 max-w-screen-xl mx-auto">
              <h3 className="font-bold text-xl md:text-3xl leading-normal text-center mb-10">Ragam Berbagai Kelebihan</h3>

              <div className="flex flex-col lg:flex-row justify-center items-center gap-20">
                <img src={valueDetail} alt="value-detail" className="rounded-2xl lg:max-w-md" />
                <ul className="mx-7 lg:mx-0 max-w-md">
                  <li className="mb-3">
                    <img src={iconCheck} alt="" className="inline me-1 w-5 lg:w-6 -ms-8 absolute" />
                    <span className="text-sm opacity-80">Pemilik bisnis dan karyawan dapat dengan cepat memahami cara menggunakannya.</span>
                  </li>
                  <li className="mb-3">
                    <img src={iconCheck} alt="" className="inline me-1 w-5 lg:w-6 -ms-8 absolute" />
                    <span className="text-sm opacity-80">Memungkinkan fleksibilitas dalam mengelola penjualan dari berbagai lokasi dalam toko atau bahkan di luar toko.</span>
                  </li>
                  <li className="mb-3">
                    <img src={iconCheck} alt="" className="inline me-1 w-5 lg:w-6 -ms-8 absolute" />
                    <span className="text-sm opacity-80">Memungkinkan pemilik bisnis untuk memantau stok barang dengan lebih efisien. Ini membantu menghindari kekurangan atau kelebihan persediaan.</span>
                  </li>
                  <li className="mb-3">
                    <img src={iconCheck} alt="" className="inline me-1 w-5 lg:w-6 -ms-8 absolute" />
                    <span className="text-sm opacity-80">Menghasilkan laporan penjualan dan analisis data yang membantu pemilik bisnis dalam memahami tren penjualan, mengidentifikasi produk yang paling laris, dan mengambil keputusan berdasarkan data.</span>
                  </li>
                </ul>
              </div>
            </section>
          </main>
        ) : (
          <ErrorPage link="solusi" />
        )}
      </>
    </HelmetProvider>
  );
};
export default Details;
