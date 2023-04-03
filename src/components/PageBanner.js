import p1 from "../assets/razer-viper-v2-pro-cat-banner.jpg";
function PageBanner(props) {
  return (
    <section className="page-banner">
      <div className="container">
        <div className="content">
          <h1>{props.header}</h1>
          <p>{props.body}</p>
        </div>
      </div>
    </section>
  );
}

export default PageBanner;
