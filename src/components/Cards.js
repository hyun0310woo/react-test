import React from 'react'
import CardItem from './CardItem'
import "./Cards.css" 

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <dlv className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src="images/img-9.jpg" 
                        text="Explore the hidden waterfall deep iside the Amazon Jungle" 
                        label="Adventure" 
                        path="/Skills"/>
                    </ul>
                </div>
            </dlv>
        </div>
    )
}

export default Cards
