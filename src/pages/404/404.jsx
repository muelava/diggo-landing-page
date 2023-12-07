import Image404 from "./../../assets/images/404.svg";
import { TertiaryButton } from "../../components/Button/Button";

const ErrorPage = (props) => {
  return (
    <div className="mb-10">
      <img src={Image404} alt="404.svg" className=" w-80 mx-auto mt-40 mb-3" />
      <h2 className="text-center font-bold text-2xl mb-3">Not Found!</h2>
      <p className="text-center text-sm mb-3">Oopps!! Sepertinya kamu tersesat, buruan pulang sebelum gelap</p>
      <div className="flex justify-center">
        <TertiaryButton link={props.link ? "/" + props.link : "/"} textButton="Kembali" sizeButton="md" />
      </div>
    </div>
  );
};

export default ErrorPage;
