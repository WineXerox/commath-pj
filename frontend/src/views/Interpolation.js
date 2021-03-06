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
import { getInterpolation } from "../functions/function";

function Interpolation() {
  const navigate = useNavigate();
  const [x, setx] = useState();
  const [xi1, setxi1] = useState();
  const [xi2, setxi2] = useState();
  const [xi3, setxi3] = useState();
  const [xi4, setxi4] = useState();
  const [xi5, setxi5] = useState();
  const [xi6, setxi6] = useState();
  const [yi1, setyi1] = useState();
  const [yi2, setyi2] = useState();
  const [yi3, setyi3] = useState();
  const [yi4, setyi4] = useState();
  const [yi5, setyi5] = useState();
  const [yi6, setyi6] = useState();

  const [result, setresult] = useState();

  const back = () => {
    navigate("/");
  };

  const generate = () => {
    const data = {
      x:x,
      xi:[xi1,xi2,xi3,xi4,xi5,xi6],
      yi:[yi1,yi2,yi3,yi4,yi5,yi6]
      
    };
    getInterpolation(data).then((res) => {
        setresult(`วินาทีที่ ${x} จะมีความเร็วประมาณ ${res}`)
    });
  };

  return (
    <div>
      <Row style={{ marginTop: "5%" }}>
        <Col sm="3"></Col>
        <Col sm="6">
        <div className="text-center">
        <Card style={{ marginBottom : "20px",marginTop: "10px", marginRight: "0px",margin: "10",backgroundColor: "#009933" }}>
           <h2 style={{ marginTop: "20px", marginRight: "20px" }}>บทที่ 3 Interpolation</h2>
        </Card>
        </div>
        <div >
            <Card style={{ marginBottom : "20px",marginTop: "10px", marginRight: "0px",margin: "10",backgroundColor: "#F1F3CE"}}>
            <div className="text-center">
              <h5>Quadratic Interpolation</h5>
              <p>y(x)=L0(x)y0+L1(x)y1+L2(x)y2</p>
              <p>ตัวอย่างข้อมูล :</p>
                <p>t = 5</p>
                <p>x = [ 0, 8, 14, 20, 23, 30 ]</p>
                <p>y = [ 0, 50, 96, 110, 100, 86 ]</p>
            </div>    
            </Card>
        </div>
       
          <Card style={{ alignItems: "center" }}>
            <Row style={{ marginTop: "50px" }}>
              <Col></Col>
            </Row>

            <Row>
              <div className="text-center">
                <Row>
                  <h3 style={{ marginTop: "20px", marginRight: "20px" }}>t:</h3>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={x}
                    onChange={(e) => setx(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                </Row>
                <Row>
                  <h3 style={{ marginTop: "20px", marginRight: "20px" }}>
                    xi:
                  </h3>

                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={xi1}
                    onChange={(e) => setxi1(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={xi2}
                    onChange={(e) => setxi2(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={xi3}
                    onChange={(e) => setxi3(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={xi4}
                    onChange={(e) => setxi4(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={xi5}
                    onChange={(e) => setxi5(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={xi6}
                    onChange={(e) => setxi6(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    // onChange={(e) => setxi6(e.target.value)}
                  />
                </Row>
                <Row>
                  <h3 style={{ marginTop: "20px", marginRight: "20px" }}>
                    yi:
                  </h3>

                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={yi1}
                    onChange={(e) => setyi1(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={yi2}
                    onChange={(e) => setyi2(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={yi3}
                    onChange={(e) => setyi3(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={yi4}
                    onChange={(e) => setyi4(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={yi5}
                    onChange={(e) => setyi5(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={yi6}
                    onChange={(e) => setyi6(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    // onChange={(e) => setxi6(e.target.value)}
                  />
                </Row>
              </div>
            </Row>

            <Row style={{ marginBottom: "30px" }}>
              <Col sm="8">
                <Button onClick={generate} color="success">
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
          <div>
              <Card style={{  marginBottom : "20px",marginTop: "10px", marginRight: "0px",margin: "10",backgroundColor: "#F1F3CE" }}>
              <div className="text-center">
                <h4 style={{ marginBottom: "10px" }}>ผลลัพธ์ : {result}</h4>
              </div>     
              </Card>
          </div>
        </Col>

        <Col sm="3"></Col>
      </Row>
    </div>
  );
}

export default Interpolation;
