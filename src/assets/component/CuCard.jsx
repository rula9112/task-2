import { Col, Image } from "react-bootstrap";

const CuCard = (props)=>{
    const propsMD = props.md;
    const propsXS = props.xs;
    const srcimage = props.srcImg;
    const HorizontalCard = props.HorizontalCard;
    const paragraph = props.paragraph;
    const header = props.header;
    const desc = props.description;
    const classname = `cu-card ${props.classname}`;

    return(
        <Col md={propsMD} xs={propsXS} className={classname}>
        <Image src={srcimage} />
        <a href="#" className="link"><h3>{header}</h3></a>
        <a href="#" className="link"><p>{paragraph}</p></a>
        <p className="color-grey">{desc}</p>
        <Image src={HorizontalCard} />

      </Col>
    )
}
export default CuCard