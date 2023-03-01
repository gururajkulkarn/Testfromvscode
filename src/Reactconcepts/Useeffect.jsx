import React from "react";
import { useEffect, useState } from "react";
import Content from "./Data";
import Waiting1 from "./Loding";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Api = () => {

  const [text, setText] = useState(<Waiting1/>);
  const [data, setData] = useState();
  const [data1, setData1] = useState();

  useEffect(() => {

    setTimeout(() => {
      setText(() => <h1>{Content.data1}</h1>);
    }, 2000);

    setTimeout(() => {
      setData(() => <img src={Content.pic1} alt="pic" height="300px" />);
    }, 3000);

    setInterval(() => {
      setData1(() => <img src={Content.pic2} alt="pic" height="300px" />);
    }, 5000);


  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <p>{text}</p>
        <Container>
          <Row>
            <Col>{data}</Col>
            <Col>{data1}</Col>
            <Col>{data}</Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Api;
