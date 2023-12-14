import { TertiaryButton } from "../Button/Button";
import backgroundBeforeFooter from "../../assets/images/background-before-footer.png";
import hero from "../../assets/images/hero.png";

import "./HeadResource.scss";

const HeadResource = () => {
  return (
    <>
      <section className="head-resource" style={{ backgroundImage: `url(${backgroundBeforeFooter})` }}>
        <div className="px-3 pb-20 pt-40 flex flex-col md:flex-row items-center gap-5 lg:gap-10 max-w-screen-xl mx-auto">
          <div className="text-white lg:w-1/2">
            <h4 className="font-bold mb-3 text-3xl">
              Berbagai Fitur Lengkap Membantu <br className="hidden lg:block" /> Mengoptimalkan Bisnis Anda
            </h4>
            <p className="mb-5">Majukan bisnismu dengan cara yang mudah</p>
            <div className="flex gap-3">
              <TertiaryButton textButton="Coba Gratis" sizeButton="btn-md" />
            </div>
          </div>
          <img src={hero} className="w-72 lg:w-1/3 object-contain" alt="" data-aos="flip-left" />
        </div>
      </section>
    </>
  );
};
export default HeadResource;
