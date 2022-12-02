import React from 'react';

//destructure props Card({img, location, price}) me ps mund te zevendesojme te gjithe {props.example} me {example}
function Card(props) {
  let badgeText = null;
    if(props.item.openSpots === 0){
      badgeText = "SOLD OUT"
    } else if (props.item.location == "Online"){
      badgeText = "Online"
    }
  
  return (
    <div className="card-holder">
     {badgeText !== null && <div className="card-badge">{badgeText}</div>}
      <img src={props.item.coverImg} alt="cover photo" className="main-card-photo" />
      <div className="card-rating">
        <img src="/star.png" alt="star-rating" />
        <p className="card-location">
          <span>
            {props.item.stats.rating} ({props.item.stats.reviewCount})
          </span>{' '}
          •{props.item.location}
        </p>
      </div>
      <h4 className="card-title">{props.item.title}</h4>
      <p className="card-price-holder">
        <span className="card-price">From $ {props.item.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
