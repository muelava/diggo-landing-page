import { Helmet, HelmetProvider } from "react-helmet-async";
import BeforeFooter from "../../components/BeforeFooter/BeforeFooter";
import HeadResource from "../../components/HeadResource/HeadResource";
import { OutlineButton } from "../../components/Button/Button";

const Solution = () => {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Diggo - Solusi</title>
        </Helmet>
        <main>
          <HeadResource />

          {/* contain */}
          <section className="px-3 pt-20 gap-5 bg-primary-50 max-w-screen-xl mx-auto">
            <h3 className="font-bold text-xl md:text-3xl leading-normal text-center mb-10 lg:w-3/4 lg:mx-auto">Solusi Berbagai Jenis Bisnis</h3>

            <div className="p-5 lg:max-w-5xl mx-auto md:p-10 bg-white shadow rounded-3xl flex flex-col lg:flex-row gap-5 lg:gap-10 mb-5">
              <img src="https://source.unsplash.com/featured?retail" className="w-96 aspect-video rounded-2xl object-cover" alt="retail.png" />
              <div>
                <h2 className="font-bold lg:text-xl mb-5">Toko Retail</h2>
                <p className="leading-7 mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, illum error maiores magni sunt iusto inventore dicta culpa tempora rem at modi placeat soluta tempore voluptatem facilis autem laudantium eos facere fuga nihil totam. Odit, veritatis ab amet accusantium culpa ipsum
                  deleniti ipsam eum magni sapiente. Vel excepturi aspernatur eligendi?
                </p>
                <OutlineButton link="solusi/toko-retail" textButton="Pelajari lebih lanjut" iconButton={<i className="fa fa-chevron-right fa-sm"></i>} colorButton="border-primary text-primary" />
              </div>
            </div>

            <div className="p-5 lg:max-w-5xl mx-auto md:p-10 bg-white shadow rounded-3xl flex flex-col lg:flex-row gap-5 lg:gap-10 mb-5">
              <div>
                <h2 className="font-bold lg:text-xl mb-5">Bisnis dan Jasa</h2>
                <p className="leading-7 mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, illum error maiores magni sunt iusto inventore dicta culpa tempora rem at modi placeat soluta tempore voluptatem facilis autem laudantium eos facere fuga nihil totam. Odit, veritatis ab amet accusantium culpa ipsum
                  deleniti ipsam eum magni sapiente. Vel excepturi aspernatur eligendi?
                </p>
                <OutlineButton link="solusi/bisnis-dan-jasa" textButton="Pelajari lebih lanjut" iconButton={<i className="fa fa-chevron-right fa-sm"></i>} colorButton="border-primary text-primary" />
              </div>
              <img src="https://source.unsplash.com/featured?business&services" className="w-96 aspect-video rounded-2xl object-cover" alt="retail.png" />
            </div>

            <div className="p-5 lg:max-w-5xl mx-auto md:p-10 bg-white shadow rounded-3xl flex flex-col lg:flex-row gap-5 lg:gap-10 mb-5">
              <img src="https://source.unsplash.com/featured?food&beverages" className="w-96 aspect-video rounded-2xl object-cover" alt="retail.png" />
              <div>
                <h2 className="font-bold lg:text-xl mb-5">Food & Beverages</h2>
                <p className="leading-7 mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, illum error maiores magni sunt iusto inventore dicta culpa tempora rem at modi placeat soluta tempore voluptatem facilis autem laudantium eos facere fuga nihil totam. Odit, veritatis ab amet accusantium culpa ipsum
                  deleniti ipsam eum magni sapiente. Vel excepturi aspernatur eligendi?
                </p>
                <OutlineButton link="solusi/food-and-beverages" textButton="Pelajari lebih lanjut" iconButton={<i className="fa fa-chevron-right fa-sm"></i>} colorButton="border-primary text-primary" />
              </div>
            </div>

            <div className="p-5 lg:max-w-5xl mx-auto md:p-10 bg-white shadow rounded-3xl flex flex-col lg:flex-row gap-5 lg:gap-10 mb-5">
              <div>
                <h2 className="font-bold lg:text-xl mb-5">Enterprise</h2>
                <p className="leading-7 mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, illum error maiores magni sunt iusto inventore dicta culpa tempora rem at modi placeat soluta tempore voluptatem facilis autem laudantium eos facere fuga nihil totam. Odit, veritatis ab amet accusantium culpa ipsum
                  deleniti ipsam eum magni sapiente. Vel excepturi aspernatur eligendi?
                </p>
                <OutlineButton link="solusi/enterprise" textButton="Pelajari lebih lanjut" iconButton={<i className="fa fa-chevron-right fa-sm"></i>} colorButton="border-primary text-primary" />
              </div>
              <img src="https://source.unsplash.com/featured?enterprise" className="w-96 aspect-video rounded-2xl object-cover" alt="retail.png" />
            </div>
          </section>

          <BeforeFooter />
        </main>
      </>
    </HelmetProvider>
  );
};
export default Solution;
