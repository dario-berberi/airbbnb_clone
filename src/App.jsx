import React from 'react';
import Card from './Card';
import Navbar from './Navbar';
import card_data from './data.jsx';
import Hero from './Hero';

function App() {
  const cards = card_data.map(card => 
    <Card 
      //key duhet qe te jete unik 
      key={card.id}
      //perdorim deconstruct per te kaluar te gjithe objektin si props per ta pasur me telehte item = {card}
      //perodim opbject spread syntax per ta bere pak me te thjeshte tek Card.sjx component {...card}
      //spread ose deconstruct jan optional zgjidh ke ke me te lehte 
      //WARNING!! kur perorim spread nese nje element nuk e perodim sic duhet tek Card.jsx nuk behet render asnjegje
      item={card}
      
    />)

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="content">
        {cards}
      </div>
    </div>
  );
}

export default App;
