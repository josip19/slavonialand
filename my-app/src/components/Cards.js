import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Upoznajte Slavoniju</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <CardItem 
                        src='/slika1.jpg'
                       text='Upustite se u zanimljivu povjest dvorca Pejačević'
                       label="Povjest i kultura"
                      path='/usluge'
                      />
                       <CardItem 
                        src='/vinkovacke.jpeg'
                       text='Provedite se kao nikad na Vinkovaćkim jesenima '
                       label='Tradicija'
                      path='/dogadjaji'
                      />
                    </ul>
                    <ul className="cards__item">
                         <CardItem 
                        src='/gastronomija.jpeg'
                       text='Upustite se u zanimljivu povjest dvorca Pejačević'
                       label="Gastronomija"
                      path='/usluge'
                      />
                        <CardItem 
                        src='/vinkovci.jpg'
                       text='Doživite nezaboravan dan u najljepšem i najstarijem gradu u Europi '
                       label='Najstariji grad'
                      path='/dogadjaji'
                      />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
