import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import "./style.css";

const CardDetails = (props) => {
  const handleClick = () => {
    props.clickMe(props.description);
  };
  return (
   
    <div className="one">
        <Card>
          <Card.Img src={props.img} className="image" />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text >{props.description}</Card.Text>
            <Button onClick={handleClick} variant="primary">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
      </div>
    
  );
};
export default CardDetails;
