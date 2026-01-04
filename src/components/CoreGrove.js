import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CoreGrove = ({ title, description, imgUrl, slug }) => {
  return (
    <Link to={`/project/${slug}`} className="project-card-link">
      <div className="proj-imgbx h-100">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Link>
  );
};
