import './App.css';
import Card from './components/card';
import { useState } from 'react';


function App() {
console.log(1)

  const cardData = [
    {
    unlimited: "300",
    price: "300",
    speed: "10",

    },
    {
    unlimited: "450",
    price: "450",
    speed: "50",

    },
    {
    unlimited: "550",
    price: "550",
    speed: "100",
    
    },
    {
    unlimited: "1000",
    price: "1000",
    speed: "200",
    
    },
    ]
    const [selectedCard, setSelectedCard] = useState(null);

    const handleSelectCard = (index) => {
      setSelectedCard(index);
    };

  return (
    <div className="App">
      {cardData.map ((card, index) =>(
      <Card
        key = {index}
        unlimited = {card.unlimited}
        price = {card.price}
        speed = {card.speed}
        onSelect={() => handleSelectCard(index)}
        selected={selectedCard === index}
      />
    ))}
    </div>
  );
}

export default App;