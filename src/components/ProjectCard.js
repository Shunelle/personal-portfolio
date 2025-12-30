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
    // 將 md={4} 改為 md={6}，這樣兩個專案就會各佔 50% 寬度
    <Col sm={6} md={6}>
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