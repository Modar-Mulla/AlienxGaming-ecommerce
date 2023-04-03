import { Link } from "react-router-dom";
function Breadcrumb(props) {
  return (
    <nav className="breadcrumb">
      <div className="container">
        <ol>
          {props.links.map((link,index) => {
            return (
              <li key={index}>
                <Link to={""} >{link}</Link>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

export default Breadcrumb;
