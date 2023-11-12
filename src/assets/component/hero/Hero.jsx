import { Button, Carousel, Image } from "react-bootstrap";
import srcIMG from './../../images/phono-slider-1.webp'
import srcIMG3 from './../../images/phono-slider-3.webp'
import srcIMG2 from './../../images/phono-slider-2.jpeg'

const Hero = ()=>{return(
    <Carousel className="hero">
      <Carousel.Item>
        
        <Image src={srcIMG} className='fluid'  text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button className="cu-btn">SHOP NOW</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <Image src={srcIMG2} className='fluid' text="secound slide" />
        <Carousel.Caption className="caption">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
        <Image src={srcIMG3} className='fluid'  text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
)}
export default Hero;