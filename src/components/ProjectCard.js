import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {

  const isTingleTennis = title === "Tingle-Tennis";

  const cardContent = (
    <div className="proj-imgbx">
      <img src={imgUrl} alt={title} />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  );

  return (
    <Col md={4}>
      {isTingleTennis ? (
        <a href="/tingle-tennis.html">
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </Col>
  );
};
