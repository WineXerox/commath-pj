import React, { useState } from "react";
import {
  CardTitle,
  CardText,
  Row,
  Col,
  Button,
  Card,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { getDifferentiation } from "../functions/function";

function Differentiation() {
  const navigate = useNavigate();
  const [h, seth] = useState();
  const [p, setp] = useState();

  const [result, setresult] = useState();

  const back = () => {
    navigate("/");
  };

  const generate = () => {
    const data = {
      h:h,
      p:p
      
    };
    getDifferentiation(data).then((res) => {
       setresult(res)
    });
  };

  return (
    <div>
      <Row style={{ marginTop: "5%" }}>
        <Col sm="4"></Col>
        <Col sm="4">
          <div className="text-center">
          <Card style={{ marginBottom : "20px",marginTop: "10px", marginRight: "0px",margin: "10",backgroundColor: "#4da6ff" }}>
            <h2 style={{ marginTop: "20px", marginRight: "20px" }}>
              บทที่ 4 Differentiation
            </h2>
          </Card>
          </div>
          <div className="text-center">
          <Card style={{  marginBottom : "20px",marginTop: "10px", marginRight: "0px",margin: "10",backgroundColor: "#F1F3CE" }}>
              <h4>Richardson Extrapolation</h4>
              <p>G=((2^p)*g(h1/2)−g(h1))/(2^p)−1</p>
              <p>ตัวอย่างข้อมูล :</p>
              <p>p = 0.64</p>
              <p>h = 2</p>
            </Card>
          </div>

          <Card style={{ alignItems: "center" }}>
            <Row style={{ marginTop: "50px" }}>
              <Col></Col>
            </Row>

            <Row>
              <div className="text-center">
                <Row>
                  <h3 style={{ marginTop: "20px", marginRight: "20px" }}>h:</h3>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={h}
                    onChange={(e) => seth(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                </Row>
                <Row>
                  <h3 style={{ marginTop: "20px", marginRight: "20px" }}>p:</h3>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={p}
                    onChange={(e) => setp(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                </Row>
              </div>
            </Row>

            <Row style={{ marginBottom: "30px" }}>
              <Col sm="8">
                <Button onClick={generate} color="info">
                  <div style={{ width: 300 }}>
                    <h3 style={{ marginTop: "10px" }}>คำนวณ</h3>
                  </div>
                </Button>
              </Col>
              <Col sm="4">
                <Button onClick={back} color="secondary">
                  <div style={{ width: 100 }}>
                    <h3 style={{ marginTop: "10px" }}>กลับ</h3>
                  </div>
                </Button>
              </Col>
            </Row>
          </Card>
          <div className="text-center">
                  <Card style={{  marginBottom : "20px",marginTop: "10px", marginRight: "0px",margin: "10",backgroundColor: "#F1F3CE" }}>
                  <h4 style={{ marginBottom: "10px" }}>ผลลัพธ์ : {result}</h4>
                  </Card>
          </div>
        </Col>

        <Col sm="4"></Col>
      </Row>
    </div>
  );
}
export default Differentiation;
