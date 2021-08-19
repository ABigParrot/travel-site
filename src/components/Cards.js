import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>LOOK AT THE PLACES YOU COULD GO TO!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    <CardItem 
                            src='images/img-north-carolina.jpg'
                            text='Go to North Carolina!'
                            label='Asheville'
                            path='/services'
                    />
                    <CardItem 
                            src='images/img-japan.jpg'
                            text='Go to Japan!'
                            label='Kyoto'
                            path='/services'
                    />
                    </ul>
                    <ul className="cards__items">
                    <CardItem 
                            src='images/img-greece.jpg'
                            text='Go to Greece!'
                            label='Santorini'
                            path='/services'
                    />
                    <CardItem 
                            src='images/img-africa.jpg'
                            text='Go to Africa!'
                            label='Kilimanjaro'
                            path='/services'
                    />
                    <CardItem 
                            src='images/img-2.jpg'
                            text='Go to Australia!'
                            label='Queensland'
                            path='/services'
                    />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
