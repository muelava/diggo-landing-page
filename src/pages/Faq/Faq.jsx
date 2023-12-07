import { Helmet, HelmetProvider } from "react-helmet-async";
import BeforeFooter from "../../components/BeforeFooter/BeforeFooter";
import "./Faq.scss";

const Faq = () => {
  const handleTab = (event) => {
    const clickedElement = event.currentTarget;

    document.querySelectorAll(".tab_btn").forEach(function (ele) {
      ele.classList.remove("active");
    });
    clickedElement.classList.add("active");

    document.querySelectorAll(".tab_content").forEach(function (ele) {
      ele.classList.add("hidden");
    });
    document.querySelector(clickedElement.dataset.target).classList.remove("hidden");
  };

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Diggo - FAQ</title>
        </Helmet>
        <main>
          {/* contain */}
          <h3 className="font-bold text-xl md:text-3xl leading-normal text-center mb-3 lg:w-3/4 lg:mx-auto pt-40">Frequently Asked Question</h3>
          <p className="text-center mb-10 opacity-80">Kumpulan pertanyaan yang sering diajukan beserta jawabannya, membantu pengguna memahami topik dengan lebih baik.</p>
          <hr />
          <section className="px-5 md:px-10 pt-20 lg:flex gap-5 mb-10">
            <div className="lg:w-96 lg:p-10 rounded-xl shadow">
              <button onClick={handleTab} data-target="#tab_1" className="tab_btn active btn w-full mb-3 hover:bg-transparent hover:border-primary hover:opacity-90 font-bold normal-case">
                <i className="fa-solid fa-bookmark"></i> Pertanyaan Umum
              </button>
              <button onClick={handleTab} data-target="#tab_2" className="tab_btn btn w-full mb-3 hover:bg-transparent hover:border-primary hover:opacity-90 font-bold normal-case">
                <i className="fa-solid fa-square-down"></i> Cara Install
              </button>
              <button onClick={handleTab} data-target="#tab_3" className="tab_btn btn w-full mb-3 hover:bg-transparent hover:border-primary hover:opacity-90 font-bold normal-case">
                <i className="fa-solid fa-briefcase-blank"></i> Cara Beli
              </button>
            </div>
            <div className="flex-1">
              <div id="tab_1" className="lg:p-10 rounded-xl shadow tab_content">
                <p className="mb-3 font-bold text-lg lg:text-xl">Tentang Diggo</p>
                <hr className="mb-5" />
                <div className="collapse collapse-arrow mb-3">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-base font-semibold">Apa itu diggo?</div>
                  <div className="collapse-content text-sm">
                    <p>hello</p>
                  </div>
                </div>
                <div className="collapse collapse-arrow mb-3">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-base font-semibold">Bagaimana cara mengatur akun saya?</div>
                  <div className="collapse-content text-sm">
                    <p>hello</p>
                  </div>
                </div>
                <div className="collapse collapse-arrow mb-3">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-base font-semibold">Bagaimana cara menambahkan produk baru ke dalam inventaris aplikasi?</div>
                  <div className="collapse-content text-sm">
                    <p>hello</p>
                  </div>
                </div>
              </div>
              <div id="tab_2" className="lg:p-10 rounded-xl shadow tab_content hidden">
                <p className="mb-3 font-bold text-lg lg:text-xl">Cara Install</p>
              </div>
              <div id="tab_3" className="lg:p-10 rounded-xl shadow tab_content hidden">
                <p className="mb-3 font-bold text-lg lg:text-xl">Cara Beli</p>
              </div>
            </div>
          </section>

          <BeforeFooter />
        </main>
      </>
    </HelmetProvider>
  );
};
export default Faq;
