import React from 'react';
import './App.css';
import daisy from './Daisy.jpg';
import sunflower from './Sunflower.jpg';
import {Card} from 'react-bootstrap';

function Shop() {

  const cardInfo =[
    {image: daisy,title:"Daisy",text:"This is Daisy."},
    {image:sunflower,title:"Sunflower",text:"This is Sunflower."}
  ];

  const renderCard = (card,index) =>{
    return(
           <Card style={{ width: '18rem' }} key={index} className="box">
          <Card.Img variant="top" src="holder.js/100px180" src={card.image} style={{width: "200px"}}/>
          <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          
          <Card.Text>
            {card.text}
            </Card.Text>
            </Card.Body>
    </Card>
    )
  }

  return (
    <div className="grid">
        <h1 style={{fontFamily: 'bold'}}>Shop Page</h1>
    {/* //     <div className="row">
    //     <div className="column">
    //     <img src={daisy} alt="Daisy" style={{width: "200px"}} />
    //     </div>
    //     <div className = "column">
    //     <img src={sunflower} alt="Sunflower" style={{width: "200px"}} />
    //     </div>
    //     </div> */}

    {cardInfo.map(renderCard)}
</div>
  );
}


export default Shop;