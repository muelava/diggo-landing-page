import { Helmet, HelmetProvider } from "react-helmet-async";
import BeforeFooter from "../../components/BeforeFooter/BeforeFooter";
import HeadResource from "../../components/HeadResource/HeadResource";

const Product = () => {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Diggo - Produk</title>
        </Helmet>
        <main>
          <HeadResource />

          {/* contain */}
          <section className="px-5 pt-20 lg:flex gap-5 max-w-screen-xl mx-auto">
            <div className="lg:w-96 lg:p-10 rounded-xl shadow">
              <p className="mb-3 text-primary">Fitur Aplikasi</p>
              <hr className="mb-5" />
              <div className="collapse collapse-arrow bg-fuchsia-600 text-white mb-3">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-base font-medium">Aplikasi Kasir Online</div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-indigo-600 text-white mb-3">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-base font-medium">Inventory</div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-red-600 text-white mb-3">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-base font-medium">Aplikasi Owner</div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-green-600 text-white mb-3">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-base font-medium">Kasir Online</div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
            </div>
            <div className="flex-1 ">
              <h2 className="font-bold lg:text-xl">Aplikasi Kasir Online</h2>
              <article className="my-5">
                <p className="leading-7">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto at inventore aut id illum nobis quia dolorem reprehenderit ut, fugit iusto voluptatibus consequuntur, omnis quae praesentium vitae expedita asperiores. Minus ab odio consequuntur optio. Recusandae itaque sequi
                  suscipit! Cupiditate ratione itaque, quae praesentium autem nam eligendi eaque optio explicabo, veniam eius eos dignissimos voluptas id a aperiam repellendus ducimus asperiores beatae unde. Eum nam ipsa voluptatibus cupiditate. Dolorum tenetur magnam laborum cum recusandae ullam
                  est quam ducimus ad quia consequuntur, labore aut illum laboriosam tempore eveniet ex esse sit suscipit ab magni beatae. Sed et dolorum, ex aliquid officia facilis.
                </p>
                <img src="https://i.ibb.co/jzF84Tt/content.png" alt="desktop" className="object-contain" />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus corporis illum voluptate obcaecati. Nihil dolorum, iste quo animi ipsa debitis quae quas provident asperiores cum laborum aspernatur impedit sapiente assumenda! Maxime, architecto obcaecati? Nostrum voluptatibus
                  consequuntur voluptatem temporibus illum repellendus quod odit excepturi ipsam vitae commodi vel quo quam, sed officiis ipsum rerum necessitatibus velit. Delectus ipsum, quaerat itaque sequi labore deleniti dignissimos quo quae accusamus quibusdam? Exercitationem, nam sunt. Ratione
                  minima, ullam fugiat possimus fuga tempore nihil ipsa praesentium!
                </p>
                <img src="https://i.ibb.co/Xtr0HHC/mobile.png" alt="desktop" className="object-contain" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quos nemo, sed illo corrupti labore libero commodi vero similique dolorum. Perferendis officiis asperiores a. Assumenda veniam quidem inventore iure soluta?</p>
              </article>
            </div>
          </section>

          <BeforeFooter />
        </main>
      </>
    </HelmetProvider>
  );
};
export default Product;
