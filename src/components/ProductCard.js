import { Link } from "react-router-dom";
function ProductCard(props) {
  return props.sliderProduct ? (
    <article ref={props.productRef} className="product-card">
      <Link>
        <div className="price-badge">$19.00 USD</div>
        <div className="img-wrapper">
          <img src={props.imgSrc} alt="" />
        </div>
        <div className="content">
          <h3>Ultra Wireless</h3>
          <p>
            Lorem ipsum dolor sit amet, consecteturolilo adipiscing elit.
            Maecenas turpis dictu
          </p>
        </div>
      </Link>
      <button className="add-to-cart">Add to cart</button>
    </article>
  ) : (
    <article className="product-card">
      <Link>
        <div className="img-wrapper">
          <img src={props.imgSrc} alt="rgb-ultra-wireless" />
        </div>
        <div className="content">
          {props.isProductCatg && (
            <span className="product-catg">{props.productCatg}</span>
          )}
          <h4>ultra wireless</h4>
          <div className="price-wrapper">
            <span className="with-sale">$ 32.99 USD</span>
            <span className="without-sale">$ 36.99 USD</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
export default ProductCard;
