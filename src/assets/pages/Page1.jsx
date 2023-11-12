import { Button, Col, Container, Image, Row } from "react-bootstrap";
import imgsrc from './../images/ic13.avif'


export default function Page1 (){
    return(
        <section className="about text-center">          
    <h3 className="mt-5">RAISE YOUR EXPECTATIONS</h3>
    <p className="mb-5 mt-1">REFINED VIEWING EXPERIENCE</p>
            <Container className='mt-5 '>
            <div className="left text-left">
              <h4>
                42 FRONT CAMERA FOR PERFECT SHOT
              </h4>
              <p>
              Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.

Diam vulputate ut pharetra sit. Elit ut aliquam purus sit amet luctus venenatis lectus. Lorem dolor sed viverra ipsum nunc aliquet. Ut consequat semper viverra nam libero. Velit ut tortor aremn.
              </p>

            </div>
            <div className="right">
                    <Image src={imgsrc} />
               
            </div>
            </Container>
        </section>  
    )
}