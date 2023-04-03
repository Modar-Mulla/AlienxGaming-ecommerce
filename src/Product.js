import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "./components/Breadcrump";
import {
  BsTruck,
  BsCreditCard,
  BsArrowReturnLeft,
  BsArrowLeft,
  BsArrowRight,
} from "react-icons/bs";
import p1 from "./assets/https __hybrismediaprod.blob.core.windows.net_sys-master-phoenix-images-container_h22_hcd_9450422534174_221110-naga-v2-pro-2-1500x1000-6.jpg";
import p2 from "./assets/https __hybrismediaprod.blob.core.windows.net_sys-master-phoenix-images-container_h35_hbc_9450350641182_221110-naga-v2-pro-3-1500x1000-5.jpg";
import ProductCard from "./components/ProductCard";
import { useRef, useState } from "react";
function Product(props) {
  const location = useLocation();
  const links = location.pathname.split("/").filter((link) => {
    return link;
  });
  const [showSlider, setShowSlider] = useState(false);
  const [selectedImgIndx, setSelectedImgIndx] = useState(0);
  const imgsSrc = [p1, p2, p1, p2, p1];
  function imgsClick(e) {
    setSelectedImgIndx(parseInt(e.target.id));
    setShowSlider(true);
  }
  function slideToRight() {
    setSelectedImgIndx(() => selectedImgIndx + 1);
  }
  function slideToLeft() {
    setSelectedImgIndx(() => selectedImgIndx - 1);
  }
  return (
    <>
      {showSlider && (
        <>
          <div className="backdrop"></div>
          <div className="display-slider">
            {selectedImgIndx > 0 && (
              <div className="left-arrow" onClick={slideToLeft}>
                <BsArrowLeft />
              </div>
            )}
            <div
              className="right-arrow"
              onClick={selectedImgIndx < imgsSrc.length - 1 && slideToRight}
            >
              <BsArrowRight />
            </div>
            <div
              className="body-wrapper"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setShowSlider(false);
                }
              }}
            >
              <div className="main-img">
                <img src={imgsSrc[selectedImgIndx]} alt="opus" />
              </div>
              <div className="imgs-wrapper">
                {imgsSrc.map((imgSrc, index) =>
                  selectedImgIndx === index ? (
                    <img
                      src={imgSrc}
                      style={{
                        opacity: "0.5",
                        border: "1px solid white",
                      }}
                      alt={""}
                    />
                  ) : (
                    <img src={imgSrc} alt={""} />
                  )
                )}
              </div>
            </div>
          </div>
        </>
      )}

      <main className="product-page">
        <Breadcrumb links={["Home", ...links]} />
        <div className="container">
          <section className="product-view">
            <div className="imgs-wrapper">
              {imgsSrc.map((imgSrc, index) => {
                return (
                  index !== 0 && (
                    <div className="img" key={index} onClick={imgsClick}>
                      <img src={imgSrc} alt={imgSrc} id={index} />
                    </div>
                  )
                );
              })}
            </div>
            <div className="main-img" onClick={imgsClick}>
              <img src={p1} alt="" id={0} />
            </div>
          </section>
          <section className="related-products">
            <header className="section-header">
              <h1>Related products</h1>
            </header>
            <div className="wrapper">
              <ProductCard
                isProductCatg={true}
                productCatg={"Headsets"}
                imgSrc={p1}
              />
              <ProductCard
                isProductCatg={true}
                productCatg={"Headsets"}
                imgSrc={p1}
              />
              <ProductCard
                isProductCatg={true}
                productCatg={"Headsets"}
                imgSrc={p1}
              />
            </div>
          </section>
          <section className="product-information">
            <h1>Product information</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
              arcu enim urna adipiscing praesent velit viverra sit semper lorem
              eu cursus vel hendrerit elementum morbi curabitur etiam nibh
              justo, lorem aliquet donec sed sit mi dignissim at ante massa
              mattis. Viverra aliquet eget sit amet tellus cras. Cursus sit amet
              dictum sit amet. Diam donec adipiscing tristique risus nec. Diam
              donec adipiscing tristique risus nec feugiat in. Quisque egestas
              diam in arcu cursus euismod quis viverra nibh. Quis imperdiet
              massa tincidunt nunc. Neque sodales ut etiam sit amet nisl purus
              non tellus orci ac auctor Adipiscing elit ut aliquam purus sit
              amet viverra suspendisse potent purus in massa temp Mauris commodo
              quis imperdiet massa tincidunt nunc pulvinar Adipiscing elit ut
              aliquam purus sit amet viverra suspendisse potenti diam vel quam
              Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
              arcu enim urna adipiscing praesent velit viverra sit semper lorem
              eu cursus vel hendrerit elementum morbi curabitur etiam nibh
              justo, lorem aliquet donec sed sit mi dignissim at ante massa
              mattis.
            </p>
          </section>
          <section className="product-details">
            <h1>Product Details</h1>
            <div className="body">
              <ul>
                <li>
                  <span className="prop-name">Brand:</span>
                  <span className="prop-value">Sneakers & Co.</span>
                </li>
                <li>
                  <span className="prop-name">Model name:</span>
                  <span className="prop-value">White Sneakers</span>
                </li>
                <li>
                  <span className="prop-name">Color:</span>
                  <span className="prop-value">White</span>
                </li>
                <li>
                  <span className="prop-name">Size:</span>
                  <span className="prop-value">Medium</span>
                </li>
              </ul>
            </div>
          </section>
          <section className="shipping-info">
            <h1>Shipping information</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
              arcu enim urna adipiscing praesent velit viverra sit semper lorem
              eu cursus vel hendrerit elementum morbi curabitur etiam nibh
              justo, lorem aliquet donec sed sit mi dignissim at ante massa
              mattis. Viverra aliquet eget sit amet tellus cras. Cursus sit amet
              dictum sit amet. Diam donec adipiscing tristique risus nec. Diam
              donec adipiscing tristique risus nec feugiat in. Quisque egestas
              diam in arcu cursus euismod quis viverra nibh. Quis imperdiet
              massa tincidunt nunc.
            </p>
          </section>

          <aside className="product-aside">
            <div className="product-aside-wrapper">
              <div className="basic-info">
                <h2>Razer Naga</h2>
                <p>
                  Nisi quis eleifend quam adipiscing vitae aliquet bibendum enim
                  facilisis gravida neque
                </p>
                <div className="price">
                  <span className="without-sale">$ 39.99 USD</span>
                  <span className="with-sale">$ 29.99 USD</span>
                  <span className="percentage">%25 OFF</span>
                </div>
              </div>
              <div className="side-product-info">
                <h3>Product information</h3>
                <ul>
                  <li>
                    <span className="prop-name">Brand:</span>
                    <span className="prop-value">Fashion Co.</span>
                  </li>
                  <li>
                    <span className="prop-name">Model name:</span>
                    <span className="prop-value">Razer Naga</span>
                  </li>
                  <li>
                    <span className="prop-name">Brand:</span>
                    <span className="prop-value">Fashion Co.</span>
                  </li>
                  <li>
                    <span className="prop-name">Brand:</span>
                    <span className="prop-value">Fashion Co.</span>
                  </li>
                </ul>
              </div>
              <div className="add-product-form">
                <form>
                  <div className="options-wrapper">
                    <div className="quantity">
                      <label htmlFor={"quantity"}>Quantity</label>
                      <input
                        name={"quantity"}
                        id={"quantity"}
                        type={"number"}
                        min={"1"}
                        max={"5"}
                        defaultValue={"1"}
                      />
                    </div>
                    <div className="color">
                      <label htmlFor={"color"}>Color</label>
                      <div className="select-wrapper">
                        <select name={"color"} id={"color"} required>
                          <option value="">Select a color</option>
                          <option value="black">Black</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <input type={"submit"} value={"Add to cart"} />
                </form>
              </div>
              <div className="services">
                <ul>
                  <li>
                    <BsTruck />
                    <div className="text">
                      <p>Free shipping</p>
                      <p>Nisi quis eleifend quam adipis lorem ipsum</p>
                    </div>
                  </li>
                  <li>
                    <BsCreditCard />
                    <div className="text">
                      <p>Secure payment</p>
                      <p>Lorem ipsum dolor sit ame consectur dragon dolrmer</p>
                    </div>
                  </li>
                  <li>
                    <BsArrowReturnLeft />
                    <div className="text">
                      <p>Free returns</p>
                      <p>Lorem ipsum dolor sit ame consectur</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="popular-products">
              <h2>Popular products</h2>
              <div className="products-wrapper">
                <Link to="" className="product">
                  <div className="img-wrapper">
                    <img src={p1} alt="" />
                  </div>
                  <div className="content">
                    <h3>11-Inch Indoor Plant</h3>
                    <div className="price">
                      <span>$ 19.99 USD</span>
                    </div>
                  </div>
                </Link>
                <Link to="" className="product">
                  <div className="img-wrapper">
                    <img src={p1} alt="" />
                  </div>
                  <div className="content">
                    <h3>11-Inch Indoor Plant</h3>
                    <div className="price">
                      <span>$ 19.99 USD</span>
                    </div>
                  </div>
                </Link>
                <Link to="" className="product">
                  <div className="img-wrapper">
                    <img src={p1} alt="" />
                  </div>
                  <div className="content">
                    <h3>11-Inch Indoor Plant</h3>
                    <div className="price">
                      <span>$ 19.99 USD</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </aside>
        </div>
        <section className="latest-products">
          <div className="container">
            <header className="section-header">
              <h1>Latest products</h1>
              <button>
                <Link to="/">Explore products</Link>
              </button>
            </header>
            <div className="wrapper">
              <ProductCard
                isProductCatg={true}
                productCatg={"Headsets"}
                imgSrc={p1}
              />
              <ProductCard
                isProductCatg={true}
                productCatg={"Headsets"}
                imgSrc={p1}
              />
              <ProductCard
                isProductCatg={true}
                productCatg={"Headsets"}
                imgSrc={p1}
              />
              <ProductCard
                isProductCatg={true}
                productCatg={"Headsets"}
                imgSrc={p1}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Product;
