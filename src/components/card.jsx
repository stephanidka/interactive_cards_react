import './card.css';
// import React, { useState } from 'react';

export default function Card({unlimited, price, speed, onSelect, selected}){
  
  const priceClassMap = {
    '300': 'card-300',
    '450': 'card-450',
    '550': 'card-550',
    '1000': 'card-1000'
};
const cardClassName = priceClassMap[price];

// const [selected, setSelected] = useState(false)
// const handleSelectedState = () => {
//   setSelected(!selected)
// }

    return(
        <div className={`Container ${cardClassName} ${selected ? 'selected' : ''}`} onClick={onSelect}>
            <div className="Unlimited">
                <p>Безлимитный {unlimited}</p>
            </div>
            <div className="PriceDiv">
                <div className="Rub"><p>руб</p></div>
                <div className="Price"><p>{price}</p></div>
                <div className="Month"><p>/мес</p></div>
            </div>
            <div className="Speed"><p>до {speed} мб/сек</p></div>
            <div className="Notes"><p>Объем включенного <br /> трафика не ограничен</p></div>
            
        </div>
    )
}