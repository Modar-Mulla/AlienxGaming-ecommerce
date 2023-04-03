import keyboardCatg from "../assets/keyboards-category-500x500.jpg";
import { Form, Link } from "react-router-dom";
import { RiAliensLine } from "react-icons/ri";
import paypal from "../assets/62f66d557719e9101ff3ff1e_logo-1-payments-shopwave-template.svg";
import stripe from "../assets/62f66d5591e02203772cc2e4_logo-2-payments-shopwave-template.svg";
import master from "../assets/62f66d5588e476c594d177d5_logo-3-payments-shopwave-template.svg";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="additional-section">
          <div className="links">
            <h3>Links</h3>
            <ul>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Products</Link>
              </li>
              <li>
                <Link to="">Contact</Link>
              </li>
              <li>
                <Link to="">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="popular-products">
            <h3>Popular products</h3>
            <div className="products-wrapper">
              <Link to="" className="product">
                <div className="img-wrapper">
                  <img src={keyboardCatg} alt="" />
                </div>
                <div className="content">
                  <h4>11-Inch Indoor Plant</h4>
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
                  <h4>11-Inch Indoor Plant</h4>
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
                  <h4>11-Inch Indoor Plant</h4>
                  <div className="price">
                    <span className="with-sale">$ 19.99 USD</span>
                    <span className="without-sale">$ 29.99 USD</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="subscribe-form">
            <h3>Get 10% OFF of your first purchase</h3>
            <form>
              <input
                type={"email"}
                name={"email"}
                placeholder="Enter your email address"
              />
              <input type={"button"} name={"subscribe"} value={"Subscribe"} />
            </form>
          </div>
        </div>
        <div className="copyright">
          <div className="logo">
            <a href="#home">
              <RiAliensLine /> ModahxAlien
            </a>
            <p>
              Copyright © Storewave X | Designed by BRIX Templates - Powered by
              Webflow
            </p>
          </div>
          <div className="payment-methods">
            <img src={paypal} alt={""} />
            <img src={stripe} alt={""} />
            <img src={master} alt={""} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
