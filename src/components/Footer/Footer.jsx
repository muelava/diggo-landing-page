import "./Footer.scss";
import logoBrand from "../../assets/logo/diggo-brand.svg";
import downloadPlaystore from "../../assets/images/download-playstore.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 text-sm lg:text-base grid-flow-row md:grid-cols-4 lg:grid-cols-5 md:gap-10">
        <aside className="col-span-2 lg:col-span-1">
          <img src={logoBrand} alt="Diggo" className="lg:w-48" />
          <p>
            Aplikasi Pendukung UMKM Paling Murah Dengan Fitur Berkelas
            <br />
            <br />
            #PakeDIGGOSekarang
          </p>
          <Link to="https://play.google.com/store/apps/details?id=id.diggo.app&pcampaignid=web_share" target="_blank">
            <img src={downloadPlaystore} alt="Download di Playstore" className="w-24 lg:w-36 object-contain" />
          </Link>
        </aside>
        <nav>
          <header className="footer-title">Profile</header>
          <a className="link link-hover">Tentang Kami</a>
          <a className="link link-hover">Hubungi Kami</a>
          <a className="link link-hover">Media</a>
          <a className="link link-hover">Karir</a>
        </nav>
        <nav>
          <header className="footer-title">Produk</header>
          <a className="link link-hover">Fitur Diggo</a>
          <a className="link link-hover">Harga</a>
          <a className="link link-hover">Paket</a>
          <a className="link link-hover">Panduan Pengguna</a>
          <a className="link link-hover">Panduan Video</a>
          <a className="link link-hover">Cerita UMKM</a>
        </nav>
        <nav>
          <header className="footer-title">Solusi</header>
          <a className="link link-hover">Salon & Barbershop</a>
          <a className="link link-hover">Fashion & Accessories</a>
          <a className="link link-hover">Food Truck & Pop Up Store</a>
          <a className="link link-hover">Car Wash</a>
          <a className="link link-hover">Cafe & Restoran</a>
          <a className="link link-hover">Toko Retail</a>
          <a className="link link-hover">Food & Beverages</a>
          <a className="link link-hover">Laundry</a>
          <a className="link link-hover">Franchise</a>
        </nav>
        <nav>
          <header className="footer-title">Bimbingan</header>
          <a className="link link-hover">Mitra Diggo</a>
          <a className="link link-hover">Kopetisi Diggo</a>
          <a className="link link-hover">Kelas Diggo</a>
          <nav className="mt-6">
            <header className="footer-title">Sales</header>
            <a className="link link-hover block mb-2">Cek Promo</a>
            <a className="link link-hover block mb-2">Undangan Demo</a>
            <a className="link link-hover block mb-2">Download Browsur</a>
          </nav>
        </nav>
        <nav className="col-span-2 lg:col-span-1">
          <header className="footer-title">Alamat Pusat</header>
          <a className="link link-hover">Ruko BizHause No. 12Metland Cibitung Bekasi - Jawa Barat - Indonesia 17520</a>
        </nav>
        <nav className=" col-span-2">
          <header className="footer-title">Sales Area</header>
          <a className="link link-hover">Jakarta, Bekasi, Bandung, Tasik, Garut,Bogor, Depok,Yogyakarta, Surabaya,Malang, Bali,Palembang, Manado,Makassar, Banjarmasin</a>
        </nav>
        <nav className=" col-span-2">
          <header className="footer-title">Media Sosial</header>
          <div className="flex gap-3">
            <a className="link link-hover hover:scale-105 transition-all duration-100">
              <i className="fa-brands fa-instagram fa-2x text-rose-600"></i>
            </a>
            <a className="link link-hover hover:scale-105 transition-all duration-100">
              <i className="fa-brands fa-facebook fa-2x text-sky-600"></i>
            </a>
            <a className="link link-hover hover:scale-105 transition-all duration-100">
              <i className="fa-brands fa-linkedin fa-2x text-blue-600"></i>
            </a>
            <a className="link link-hover hover:scale-105 transition-all duration-100">
              <i className="fa-brands fa-youtube fa-2x text-red-600"></i>
            </a>
          </div>
        </nav>
      </footer>
      <div className="footer footer-center p-4 bg-blue-50 text-base-content">
        <aside>
          <p className="opacity-80">2023 © PT DIGITAL INFORMASI INDONESIA</p>
        </aside>
      </div>
    </>
  );
};
export default Footer;
