import { Button, Card, Col, Row } from "react-bootstrap";
import img1 from './../../images/bg-1.webp';
import img2 from './../../images/ic12.webp'
import { useEffect } from "react";

export default function NewArrivals(){
  const myData = [{title:'title1',price:"75$",src:img1},
{title:'title2',price:"65$",src:img2},
{title:'title3',price:"65$",src:img2},
{title:'title4',price:"65$",src:img2},
{title:'title5',price:"65$",src:img2},
{title:'title6',price:"65$",src:img2},
{title:'title7',price:"65$",src:img2},
{title:'title8',price:"65$",src:img2},
];

useEffect(()=>{
 
  const result = fetch("https://dummyjson.com/products") // fetch the data from the api
  .then(function (result) {
    return result.json();
  })
  .then(function (result) {
    displayData(result.products);
  });

  
},[]);

const displayData = (arr)=>{

  arr.forEach((item,index) => {
if(index<6){

  const showArea = document.querySelector(".showData");
  const colDiv = document.createElement("div");
  colDiv.classList = "col-md-3 col-xs-12 mt-2";
  const cardDiv = document.createElement("div");
  cardDiv.classList = "card";
  const cardHead = document.createElement("div");
    cardHead.classList = "cardHead";
    const img = document.createElement("img");
    img.classList ="card-img-top";
    img.src=item.images[0];
  const cardBody = document.createElement("div");
  cardBody.classList = "text-center card-body";
  const overLay = document.createElement("h5");
  overLay.classList="overLay";
  overLay.innerText="add lite";
  const content = document.createElement("div");
  content.classList ="content";
  const cardTitle = document.createElement("div");
cardTitle.classList = "h5 card-tilte";
cardTitle.innerText = item.title;;
const price = document.createElement("p");
price.innerText=item.description;
price.classList="card-text";
content.append(cardTitle);
content.append(price);
cardBody.append(overLay);
cardBody.append(content);
cardHead.append(img);
cardDiv.append(cardHead);
cardDiv.append(cardBody);
colDiv.append(cardDiv);
showArea.append(colDiv);
}
}); 
}

    return(
        <section className='new-arrivals text-center m-5' >
            <h2 className='mt-5'>NEW ARRIVALS</h2>
            <p className="m-3 mb-5">FIND THE PERFECT PHONE FOR YOU</p>
            <Row className="showData">
                <Col md={3} xs={12}>
                <Card>
                  <div className="cardHead">
      <Card.Img variant="top" src={img1} />
                  </div>
     
      <Card.Body className='text-center'>
      <h5 class="overLay">Add To Cart</h5>

      <div class="content">
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
     
      <span>75$</span>
        </Card.Text>
      </div>
      </Card.Body>
    </Card>
                </Col>
            </Row>
            
        </section>
    )
} 