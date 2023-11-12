import { Col, Container, Row } from "react-bootstrap"
import CuCard from "../CuCard"
import smallimage from './../../images/ic12.webp'
import bigImage from './../../images/center-img_eb064c43-efaf-4d56-90df-f89acfdf85fe.webp'

const Futuers = ()=>{
    return(
        <section className="text-center">
            <Container>
    <h3 className="mt-5">INNOVATIVE QUALITIES & FEATURES</h3>
    <p className="mb-5 mt-1">INNOVATIVE QUALITIES & FEATURES</p>
    <Row className="justify-center">
        <Col xs={12} sm={12} className='md-hidden '>
        <img src={bigImage} className='md-hidden' />
        </Col>
        <Col lg={4} xs={12} sm={12} >
        <CuCard HorizontalCard={smallimage} classname={"d-flex "} description="Some quick example text to build on the card title and make up the bulk of the card's content." />
        <CuCard HorizontalCard={smallimage} classname={"d-flex mt-5"} description="Some quick example text to build on the card title and make up the bulk of the card's content." />
        <CuCard HorizontalCard={smallimage} classname={"d-flex mt-5"} description="Some quick example text to build on the card title and make up the bulk of the card's content." />
        </Col>
        
        <Col lg={4} >
        <img src={bigImage} className="xs-hidden fluid" />
        </Col>
        <Col lg={4} xs={12} sm={12}>
        <CuCard HorizontalCard={smallimage} classname={"d-flex"} description="Some quick example text to build on the card title and make up the bulk of the card's content." />
        <CuCard HorizontalCard={smallimage} classname={"d-flex mt-5"} description="Some quick example text to build on the card title and make up the bulk of the card's content." />
        <CuCard HorizontalCard={smallimage} classname={"d-flex mt-5"} description="Some quick example text to build on the card title and make up the bulk of the card's content." />
        </Col>
    </Row>
            </Container>
        </section>
    )
}
export default Futuers