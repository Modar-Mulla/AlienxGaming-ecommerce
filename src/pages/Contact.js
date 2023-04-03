import PageBanner from "../components/PageBanner";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsTelephone,
  BsEnvelope,
} from "react-icons/bs";

function Contact() {
  return (
    <main className="contact-page">
      <PageBanner
        header={"Contact Us"}
        body={
          "Nisi quis eleifend quam adipiscing vitae aliquet bibendum enim facilisis gravida neque. Velit euismod in pellentesque massa placerat."
        }
      />
      <div className="contact-form">
        <form>
          <div className="name" id={"name"}>
            <label htmlFor={"name"}>Name</label>
            <input
              type={"text"}
              id={"name"}
              placeholder={"Your name"}
              required={true}
            />
          </div>
          <div className="email">
            <label htmlFor={"email"}>Email</label>
            <input
              type={"email"}
              id={"email"}
              placeholder={"Your Email"}
              required={true}
            />
          </div>
          <div className="phone">
            <label htmlFor={"phone"}>Phone</label>
            <input
              type={"tel"}
              id={"phone"}
              placeholder={"(123) 456-789"}
              required={true}
            />
          </div>
          <div className="subject">
            <label htmlFor={"subject"}>Subject</label>
            <input
              type={"text"}
              id={"subject"}
              placeholder={"Support"}
              required={true}
            />
          </div>
          <div className="message">
            <label htmlFor={"message"}>Leave us a message</label>
            <textarea
              name={"message"}
              maxLength={5000}
              id={"message"}
              placeholder={"Please write your message here..."}
            />
          </div>
          <div className="submit">
            <input type={"submit"} value={"Send message"} />
            <ul className="social-links">
              <li>
                <a href="/">
                  {" "}
                  <BsFacebook />
                </a>
              </li>
              <li>
                <a href="/">
                  <BsTwitter />
                </a>
              </li>
              <li>
                <a href="/">
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a href="/">
                  <BsLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </form>
      </div>
      <div className="reach-directly">
        <PageBanner
          header={"Want to reach out directly?"}
          body={
            "Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du."
          }
        />
        <div className="contact-info-wrapper">
          <div className="email">
            <BsEnvelope />
            <a href="mailto:moddar8moulla@gmail.com">
              <p>Email:</p>
              <p>moddar8moulla@gmail.com</p>
            </a>
          </div>
          <div className="phone">
            <BsTelephone />
            <a href="tel:+963952479306">
              <p>Tel:</p>
              <p>+963952479306</p>
            </a>
          </div>
        </div>
      </div>
      <div className="questions-section">
        <PageBanner
          header={"Frequently Asked Questions"}
          body={
            "Cras tincidunt lobortis feugiat vivamus at morbi leo urna molestie atole elementum eu facilisis faucibus interdum posuere."
          }
        />
        <div className="container">
          <div className="question-wrapper">
            <p className="question">Do you offer international shipping?</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
