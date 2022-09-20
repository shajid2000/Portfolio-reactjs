import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, Url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a style={{color: "white"}} href={Url}><div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
          <button style={{color: "white"}}>Visit</button>
        </div>
      </div></a>
    </Col>
  )
}
