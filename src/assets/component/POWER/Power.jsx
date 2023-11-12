import { Container, Image, Row } from 'react-bootstrap'
import srcIMG from './../../images/hotspot_2934b3a5-cd7e-49be-b709-8269a17f7390.webp'
import CuCard from '../CuCard';
import img1 from './../../images/ic11.webp'

const Power = ()=>{
    return(
    <Container>
        <section className="text-center">
            <h3  className="mt-5">POSSIBILITIES. PERFORMANCE. POWER</h3>
            <p  className="mb-5 mt-1">FASTER PROCESSING WITH LESS POWER</p>
            <Image src={srcIMG} alt="mobile " className='fluid' />
            <Row>
                <CuCard md={"3"} xs={"12"} paragraph={"DUAL CAMERA"}
                 description={"Tristique senectus et netus et malesuada ant reiet fames"}
                 srcImg={img1}
                 classname={"m-nth"}
                 />

<CuCard md={"3"} xs={"12"} paragraph={"DUAL CAMERA"}
                 description={"Tristique senectus et netus et malesuada ant reiet fames"}
                 srcImg={img1}
                 classname={"m-nth"}
                 />

<CuCard md={"3"} xs={"12"} paragraph={"DUAL CAMERA"}
                 description={"Tristique senectus et netus et malesuada ant reiet fames"}
                 srcImg={img1}
                 classname={"m-nth"}
                 />

<CuCard md={"3"} xs={"12"} paragraph={"DUAL CAMERA"}
                 description={"Tristique senectus et netus et malesuada ant reiet fames"}
                 srcImg={img1}
                 classname={"m-nth"}
                 />
            </Row>
        </section>
        </Container>
    )
}
export default Power