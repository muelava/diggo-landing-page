import { TertiaryButton, OutlineButton } from "../Button/Button";
import backgroundBeforeFooter from "../../assets/images/background-before-footer.png";
import promo1 from "../../assets/images/promo-1.png";
import "./BeforeFooter.scss";

const BeforeFooter = () => {
  return (
    <>
      <section className="px-5 md:px-10 py-10 flex flex-col md:flex-row justify-center items-center gap-5 before-footer" style={{ backgroundImage: `url(${backgroundBeforeFooter})` }}>
        <img src={promo1} className="w-72 object-contain" alt="" data-aos="flip-left" />
        <div className="text-white">
          <h4 className="font-bold mb-3 text-3xl">
            Lakukan Cara Mudah <br className="hidden lg:block" /> Sekarang juga
          </h4>
          <p className="mb-5">Majukan bisnismu dengan cara yang mudah</p>
          <div className="flex gap-3">
            <TertiaryButton textButton="Coba Gratis" sizeButton="btn-md" />
            <OutlineButton textButton="Trial Gratis" sizeButton="btn-md" />
          </div>
        </div>
      </section>
    </>
  );
};

export default BeforeFooter;
