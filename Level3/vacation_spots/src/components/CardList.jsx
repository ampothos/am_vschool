import React from "react" 
import Card from "./Card.jsx"

const vacationSpots = [
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring"
    },{
      place: "Cancun",
      price: 900,
      timeToGo: "Winter"
    },{
      place: "China",    price: 1200,
      timeToGo: "Fall"
    },{
      place: "Russia",
      price: 1100,
      timeToGo: "Summer"
    },{
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring"
    }
  ]
  
export default function CardList() {
    let cards = vacationSpots.map(spot => {
        return (<Card 
                    place = {spot.place}
                    price = {spot.price}
                    timeToGo = {spot.timeToGo}
                />)
    })
    console.log(cards)
    return (
        <div className="cardList">
            {cards}
        </div>
    )
}