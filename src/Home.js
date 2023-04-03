import { useState, useRef, useLayoutEffect, useEffect } from "react";
import {
  BsKeyboard,
  BsMouse3,
  BsHeadphones,
  BsArrowRight,
  BsArrowLeft,
  BsTruck,
  BsCreditCard,
  BsChatDots,
} from "react-icons/bs";
import { AiOutlineUnorderedList, AiOutlineStar } from "react-icons/ai";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import gx502x from "./assets/g502x-white.webp";
import proX from "./assets/pro-x-keyboard-gallery-1.webp";
import miceCatg from "./assets/mice-category-500x500.jpg";
import keyboardCatg from "./assets/keyboards-category-500x500.jpg";
import HeadphonesCatg from "./assets/headsets-category-500x500.jpg";
import ProductCard from "./components/ProductCard";

function Home() {
  const productRef = useRef(null);
  const [productWidth, setProductWidth] = useState(0);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(0);

  useLayoutEffect(() => {
    setProductWidth(productRef.current.offsetWidth);
  }, []);

  function getProductSize() {
    setProductWidth(productRef.current.offsetWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", getProductSize);
  });

  function slideToRight() {
    setSliderIndex((prevValue) => {
      return prevValue + 1;
    });

    setSliderPosition((prevValue) => {
      return prevValue - (productWidth + 20);
    });
  }
  function slideToLeft() {
    setSliderIndex((prevValue) => {
      return prevValue - 1;
    });

    setSliderPosition((prevValue) => {
      return prevValue + (productWidth + 20);
    });
  }

  return (
    <main className="container">
      <section className="hero">
        <aside className="categories">
          <ul>
            <li>
              <h1>
                <AiOutlineUnorderedList /> Categories
              </h1>
            </li>
            <li>
              <Link to="/">
                <AiOutlineStar /> Popular products <RiArrowRightSLine />
              </Link>
            </li>
            <li>
              <Link to="/">
                <BsKeyboard /> Keyboards <RiArrowRightSLine />
              </Link>
            </li>
            <li>
              <Link to="/">
                <BsMouse3 /> Mouses <RiArrowRightSLine />
              </Link>
            </li>
            <li>
              <Link to="/">
                <BsHeadphones /> Headphones <RiArrowRightSLine />
              </Link>
            </li>
          </ul>
          <button className="all-products-btn large-button">
            All products
          </button>
        </aside>
        <article className="new-arrival">
          <div className="content">
            <p className="badge">New arrival</p>
            <h1>RAZER ORNATA V3</h1>
            <p className="description">
              Meet the Razer Ornata V3—a low-profile ergonomic gaming keyboard
              powered by Razer Chroma™ RGB. Sporting a new ultra-slim form
              factor, more durable keycaps, and unique mecha-membrane switches,
              enhance your work and play with a hybrid keyboard that combines
              the best of both worlds.
            </p>
            <button className="buy-now-btn">Buy now</button>
          </div>
        </article>
        <article className="sale-card">
          <div className="content">
            <h1>Get 15% OFF in Mouses</h1>
            <p className="description">
              A curated selection of our classic gear—exclusively priced with
              full warranty
            </p>
            <button className="buy-now-btn">Buy now</button>
          </div>
        </article>
        <article className="sale-card">
          <div className="content">
            <h1>Get 40% OFF in Headphones</h1>
            <p className="description">
              A curated selection of our classic gear—exclusively priced with
              full warranty
            </p>
            <button className="buy-now-btn">Buy now</button>
          </div>
        </article>
      </section>
      <section className="latest-products">
        <header className="section-header">
          <h1>Latest product</h1>
          <button>
            <Link to="/Products">Explore products</Link>
          </button>
        </header>
        <div className="wrapper">
          <ProductCard
            isProductCatg={true}
            productCatg={"Headsets"}
            imgSrc={gx502x}
          />
          <ProductCard
            isProductCatg={true}
            productCatg={"Headsets"}
            imgSrc={gx502x}
          />
          <ProductCard
            isProductCatg={true}
            productCatg={"Headsets"}
            imgSrc={gx502x}
          />
          <ProductCard
            isProductCatg={true}
            productCatg={"Headsets"}
            imgSrc={gx502x}
          />
          <ProductCard
            isProductCatg={true}
            productCatg={"Headsets"}
            imgSrc={gx502x}
          />
          <ProductCard
            isProductCatg={true}
            productCatg={"Headsets"}
            imgSrc={gx502x}
          />
          <ProductCard
            isProductCatg={true}
            productCatg={"Headsets"}
            imgSrc={gx502x}
          />
          <ProductCard
            isProductCatg={true}
            productCatg={"Headsets"}
            imgSrc={gx502x}
          />
        </div>
      </section>
      <section className="second-hero">
        <article>
          <div className="content">
            <div className="sale-info">
              <span>Save</span>
              <p>20% OFF</p>
              <span>In Keyboards</span>
            </div>
            <div className="discount-code-wrapper">
              <p>Use the discount code</p>
              <div className="code">MODA2022</div>
            </div>
          </div>
          <div className="img-wrapper">
            <img src={proX} alt="pro-x-keboard" />
          </div>
        </article>
      </section>
      <section className="popular-products">
        {sliderIndex !== 0 && (
          <button className="left-slider" onClick={slideToLeft}>
            <BsArrowLeft />
          </button>
        )}

        <button
          onClick={
            sliderIndex < 5
              ? slideToRight
              : (e) => {
                  e.preventDefault();
                }
          }
          className="right-slider"
        >
          <BsArrowRight />
        </button>
        <header className="section-header">
          <h1>Popular products</h1>
          <button>
            <Link to="/">Explore popular products</Link>
          </button>
        </header>
        <div className="products-slider">
          <div className="slider-wrapper" style={{ left: sliderPosition }}>
            <ProductCard
              sliderProduct={true}
              productRef={productRef}
              imgSrc={gx502x}
            />
            <ProductCard
              sliderProduct={true}
              productRef={productRef}
              imgSrc={gx502x}
            />
            <ProductCard
              sliderProduct={true}
              productRef={productRef}
              imgSrc={gx502x}
            />
            <ProductCard
              sliderProduct={true}
              productRef={productRef}
              imgSrc={gx502x}
            />
            <ProductCard
              sliderProduct={true}
              productRef={productRef}
              imgSrc={gx502x}
            />
            <ProductCard
              sliderProduct={true}
              productRef={productRef}
              imgSrc={gx502x}
            />
            <ProductCard
              sliderProduct={true}
              productRef={productRef}
              imgSrc={gx502x}
            />
            <ProductCard
              sliderProduct={true}
              productRef={productRef}
              imgSrc={gx502x}
            />
          </div>
        </div>
      </section>
      <section className="top-categories">
        <h1>Top categories this month</h1>
        <div className="wrapper">
          <Link className="category">
            <div className="img-wrapper">
              <img src={miceCatg} alt="gx502" />
            </div>
            <h3>Mice</h3>
          </Link>
          <Link className="category">
            <div className="img-wrapper">
              <img src={keyboardCatg} alt="gx502" />
            </div>
            <h3>Keyboards</h3>
          </Link>
          <Link className="category">
            <div className="img-wrapper">
              <img src={HeadphonesCatg} alt="gx502" />
            </div>
            <h3>Headsets</h3>
          </Link>
        </div>
      </section>
      <section className="summary">
        <div className="wrapper">
          <div className="col">
            <h1>Popular products</h1>
            <div className="products-wrapper">
              <Link to="" className="product">
                <div className="img-wrapper">
                  <img src={keyboardCatg} alt="" />
                </div>
                <div className="content">
                  <h3>11-Inch Indoor Plant</h3>
                  <div className="price">
                    <span className="with-sale">$ 19.99 USD</span>
                    <span className="without-sale">$ 29.99 USD</span>
                  </div>
                </div>
              </Link>
              <Link to="" className="product">
                <div className="img-wrapper">
                  <img src={keyboardCatg} alt="" />
                </div>
                <div className="content">
                  <h3>11-Inch Indoor Plant</h3>
                  <div className="price">
                    <span className="with-sale">$ 19.99 USD</span>
                    <span className="without-sale">$ 29.99 USD</span>
                  </div>
                </div>
              </Link>
              <Link to="" className="product">
                <div className="img-wrapper">
                  <img src={keyboardCatg} alt="" />
                </div>
                <div className="content">
                  <h3>11-Inch Indoor Plant</h3>
                  <div className="price">
                    <span className="with-sale">$ 19.99 USD</span>
                    <span className="without-sale">$ 29.99 USD</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col">
            <h1>Popular products</h1>
            <div className="products-wrapper">
              <div className="product">
                <div className="img-wrapper">
                  <img src={keyboardCatg} alt="" />
                </div>
                <div className="content">
                  <h3>11-Inch Indoor Plant</h3>
                  <div className="price">
                    <span className="with-sale">$ 19.99 USD</span>
                    <span className="without-sale">$ 29.99 USD</span>
                  </div>
                </div>
              </div>
              <div className="product">
                <div className="img-wrapper">
                  <img src={keyboardCatg} alt="" />
                </div>
                <div className="content">
                  <h3>11-Inch Indoor Plant</h3>
                  <div className="price">
                    <span className="with-sale">$ 19.99 USD</span>
                    <span className="without-sale">$ 29.99 USD</span>
                  </div>
                </div>
              </div>
              <div className="product">
                <div className="img-wrapper">
                  <img src={keyboardCatg} alt="" />
                </div>
                <div className="content">
                  <h3>11-Inch Indoor Plant</h3>
                  <div className="price">
                    <span className="with-sale">$ 19.99 USD</span>
                    <span className="without-sale">$ 29.99 USD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <h1>Popular products</h1>
            <div className="products-wrapper">
              <div className="product">
                <div className="img-wrapper">
                  <img src={keyboardCatg} alt="" />
                </div>
                <div className="content">
                  <h3>11-Inch Indoor Plant</h3>
                  <div className="price">
                    <span className="with-sale">$ 19.99 USD</span>
                    <span className="without-sale">$ 29.99 USD</span>
                  </div>
                </div>
              </div>
              <div className="product">
                <div className="img-wrapper">
                  <img src={keyboardCatg} alt="" />
                </div>
                <div className="content">
                  <h3>11-Inch Indoor Plant</h3>
                  <div className="price">
                    <span className="with-sale">$ 19.99 USD</span>
                    <span className="without-sale">$ 29.99 USD</span>
                  </div>
                </div>
              </div>
              <div className="product">
                <div className="img-wrapper">
                  <img src={keyboardCatg} alt="" />
                </div>
                <div className="content">
                  <h3>11-Inch Indoor Plant</h3>
                  <div className="price">
                    <span className="with-sale">$ 19.99 USD</span>
                    <span className="without-sale">$ 29.99 USD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="wrapper">
          <div className="service">
            <div className="icon">
              <BsTruck />
            </div>
            <div className="text">
              <p>Free Shiping</p>
              <span>on all orders over $99 USD</span>
            </div>
          </div>
          <div className="service">
            <div className="icon">
              <BsCreditCard />
            </div>
            <div className="text">
              <p>Secure checkout</p>
              <span>with credit and debit card</span>
            </div>
          </div>
          <div className="service">
            <div className="icon">
              <BsChatDots />
            </div>
            <div className="text">
              <p>24/7 Help center</p>
              <span>to help you!</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
