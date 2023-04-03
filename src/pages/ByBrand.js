import Breadcrumb from "../components/Breadcrump";
import PageBanner from "../components/PageBanner";
import { Link, useLocation } from "react-router-dom";
import { BsSearch, BsKeyboard, BsMouse3, BsHeadphones } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";
import gx502x from "../assets/g502x-white.webp";
import ProductCard from "../components/ProductCard";
function ByBrand() {
  const links = useLocation();
  return (
    <main>
      <Breadcrumb links={["Home", "Products", links.pathname.slice(1)]} />
      <PageBanner
        header={links.pathname.slice(1).toUpperCase()}
        body={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        }
      />
      <section className="products-view">
        <div className="container">
          <div className="products-search-wrapper">
            <BsSearch />
            <input
              type={"search"}
              name={"products-search"}
              placeholder={"Search for proudcts"}
            />
          </div>
          <aside className="sidenav">
            <div className="sort-wrapper">
              <ul className="sort-type">
                <li>
                  <h1>Products by category</h1>
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
              <ul className="sort-type">
                <li>
                  <h1>Products by category</h1>
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
              <ul className="sort-type">
                <li>
                  <h1>Products by category</h1>
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
            </div>
          </aside>
          <div className="products-wrapper">
            <ProductCard sliderProduct={false} imgSrc={gx502x} />
            <ProductCard sliderProduct={false} imgSrc={gx502x} />
            <ProductCard sliderProduct={false} imgSrc={gx502x} />
            <ProductCard sliderProduct={false} imgSrc={gx502x} />
            <ProductCard sliderProduct={false} imgSrc={gx502x} />
            <ProductCard sliderProduct={false} imgSrc={gx502x} />
            <ProductCard sliderProduct={false} imgSrc={gx502x} />
            <ProductCard sliderProduct={false} imgSrc={gx502x} />
            <ProductCard sliderProduct={false} imgSrc={gx502x} />
            <ProductCard sliderProduct={false} imgSrc={gx502x} />
            <ProductCard sliderProduct={false} imgSrc={gx502x} />
            <ProductCard sliderProduct={false} imgSrc={gx502x} />
          </div>
        </div>
      </section>
      <section className="sales">
        <div className="container">
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
              <h1>Get 15% OFF in Mouses</h1>
              <p className="description">
                A curated selection of our classic gear—exclusively priced with
                full warranty
              </p>
              <button className="buy-now-btn">Buy now</button>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
export default ByBrand;
