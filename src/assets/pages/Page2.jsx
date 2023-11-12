import { Button, Card, Col, Container, Row  } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

export default function Page2(){
    return(<section className="page2">
        <Row>
            <Container >
                <Row>
                    <Col md={3} xs={12} className="item">
                           <span>1</span>
                            <h4 className="m-5">TRIPLE CAMERA</h4>
                        <p>Duis at tellus at urna condimentum mattis pellentesque id nibh. Elit scelerisque mauris pellentesque pulvinar. Nunc aliquet bibendum enim facilisis gravida.</p>
                        <div>
                        <Button variant='dark'>View More</Button>
                        </div>
                    </Col>
                    <Col md={3} xs={12} className="item">
                           <span>2</span>
                            <h4 className="m-5">ULTRA GAME MODE</h4>
                        <p>Urna et pharetra pharetra massa massa ultricies mi. Scelerisque varius morbi enim nunc faucibus a pellentesque. Purus sit amet volutpat consequat mauris</p>
                        <div>
                        <Button variant='dark'>View More</Button>
                        </div>
                    </Col>
                    <Col md={3} xs={12} className="item">
                           <span>3</span>
                            <h4 className="m-5">SUPER AMOLED DISPLAY</h4>
                        <p>Urna neque viverra justo nec ultrices dui sapien eget mi. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Neque sodales ut etiam.</p>
                        <div>
                        <Button variant='dark'>View More</Button>
                        </div>
                    </Col>
                   
                </Row>

            </Container>
            </Row>
    </section>)
}