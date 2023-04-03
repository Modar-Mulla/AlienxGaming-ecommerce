import React from "react";
import { useState } from "react";
import Cart from "./Cart";
import {
  BsTelephone,
  BsEnvelope,
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
  BsSearch,
  BsBag,
  BsKeyboard,
  BsMouse3,
  BsHeadphones,
} from "react-icons/bs";
import {
  RiAliensLine,
  RiArrowDownSLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { SiRazer, SiLogitech, SiCorsair } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

function Header(props) {
  const [items, setItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showNav, setShowNav] = useState(false);

  function handleCart() {
    setShowCart(() => !showCart);
  }
  function handleShowNav() {
    setShowNav(() => !showNav);
  }
  return (
    <>
      {showCart && <Cart items={items} handleCart={handleCart} />}
      <div className="contact-info">
        <div className="container">
          <div className="left-side">
            <p className="phone-contact">
              <a href="tel:+963952479306">
                <BsTelephone />
                Support: +963952479306
              </a>
            </p>
            <p className="email-contact">
              <a href="mailto:moddar8moulla@gmail.com">
                <BsEnvelope />
                Email us: moddar8moulla@gmail.com{" "}
              </a>
            </p>
          </div>
          <div className="right-side">
            <ul className="social-links">
              <a href="facebook.com">
                <BsFacebook />
              </a>
              <a href="twitter.com">
                <BsTwitter />
              </a>
              <a href="instagram.com">
                <BsInstagram />
              </a>
              <a href="linkedin.com">
                <BsLinkedin />
              </a>
              <a href="youtube.com">
                <BsYoutube />
              </a>
            </ul>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <div className="container">
          <div className="nav-header">
            <div className="logo">
              <a href="#home">
                <RiAliensLine /> AlienxGaming
              </a>
            </div>
            <div className="search-bar">
              <input
                className="search-input"
                type="text"
                placeholder="Search.."
              />
              <button className="search-btn">
                <BsSearch />
              </button>
            </div>
            <div className="cart-navBtn-wrapper">
              <div className="cart-btn" onClick={handleCart}>
                <div className="items-count">{props.itemsCount}</div>
                <BsBag />
                <p>Your Cart</p>
              </div>
              <div className="nav-btn" onClick={handleShowNav}>
                <div style={showNav ? { left: "28%" } : {}}>
                  <AiOutlineClose />
                  <GiHamburgerMenu />
                </div>
              </div>
            </div>
          </div>

          <div className="search-bar small-screens">
            <input
              className="search-input"
              type="text"
              placeholder="Search.."
            />
            <button className="search-btn">
              <BsSearch />
            </button>
          </div>
        </div>
        <div className="nav-links" style={showNav ? { top: "23%" } : {}}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li className="catgs-drop-btn">
              <Link to="/categories">
                Categories <RiArrowDownSLine />
              </Link>
              <div className="catgs-menu">
                <div className="container">
                  <div className="col">
                    <ul className="by-catgs">
                      <li className="title">
                        <p>Products by category</p>
                      </li>
                      <li>
                        <Link to="/products/keyboards">
                          <div className="catg-name">
                            <BsKeyboard /> Keyboards
                          </div>
                          <RiArrowRightSLine />
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/mouses">
                          <div className="catg-name">
                            <BsMouse3 /> Mouses
                          </div>
                          <RiArrowRightSLine />
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/headphones">
                          <div className="catg-name">
                            <BsHeadphones /> Headphones
                          </div>
                          <RiArrowRightSLine />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul>
                      <li className="title">
                        <p>Products by brand</p>
                      </li>
                      <li>
                        <Link to="/products/keyboards">
                          <div className="catg-name">
                            <SiRazer /> Razer
                          </div>
                          <RiArrowRightSLine />
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/mouses">
                          <div className="catg-name">
                            <SiLogitech /> Logitech
                          </div>
                          <RiArrowRightSLine />
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/headphones">
                          <div className="catg-name">
                            <SiCorsair /> Corsair
                          </div>
                          <RiArrowRightSLine />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul>
                      <li className="title">
                        <p>Products by color</p>
                      </li>
                      <li>
                        <Link to="/products/keyboards">
                          <div className="catg-name">Keyboards</div>
                          <RiArrowRightSLine />
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/mouses">
                          <div className="catg-name">Mouses</div>
                          <RiArrowRightSLine />
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/headphones">
                          <div className="catg-name">Headphones</div>
                          <RiArrowRightSLine />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
