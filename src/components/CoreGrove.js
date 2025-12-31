import { Col } from "react-bootstrap";
import { Link } from "react-router-dom"; 

export const CoreGrove = ({ title, description, imgUrl, slug }) => {
  return (
    <Col size={12} sm={6} md={6}>
      <Link to={`/project/${slug}`} className="project-card-link">
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Link>
    </Col>
  );
};