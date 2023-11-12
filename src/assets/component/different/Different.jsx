import { Row , Col, Container } from "react-bootstrap";
import srcImg from "./../../images/ic11.webp"
import CuCard from "../CuCard";
 
const Different = ()=>{return(
  <section className="different text-center">
    <Container>
    <h3 className="mt-5">WHAT MAKES THE ESSENTIAL DIFFERENT?</h3>
    <p className="mb-5 mt-1">EXPERIENCE HIGH PERFORMANCE AND SECURE</p>
    <Row>
    <CuCard md={"4"} xs={"12"} paragraph={"DUAL CAMERA"}
                 description={"Tristique senectus et netus et malesuada ant reiet fames"}
                 srcImg={srcImg}
                 header={"PERFECT CUT"}
                 />
     <CuCard md={"4"} xs={"12"} paragraph={"DUAL CAMERA"}
                 description={"Tristique senectus et netus et malesuada ant reiet fames"}
                 srcImg={srcImg}
                 header={"PERFECT CUT"}
                 />
     <CuCard md={"4"} xs={"12"} paragraph={"DUAL CAMERA"}
                 description={"Tristique senectus et netus et malesuada ant reiet fames"}
                 srcImg={srcImg}
                 header={"PERFECT CUT"}
                 />
    
    </Row>
    </Container>
    </section>
)}
export default Different