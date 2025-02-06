import './Board.css'
import { useState, useEffect } from 'react';
import {Card, CardProps} from './Card'

export type CardObjects = {
    id: number;
    showFront: boolean;
    imgFront: string;
    imgBack: string;
    canFlip: boolean;
    CardClickEvent: (id: number) => void;
    isMatched: boolean;
};

function Board() {
    // States
    const [ cardClickedId, setCardClickedId ] = useState<number[]>([]);
    const [ cardObjects, setCardObjects ] = useState<CardObjects[]>([]);

    const cards: CardObjects[] = [
        {id: 0, showFront: false, imgFront: "/apple.jpg", imgBack: "/background.jpg", canFlip: true, CardClickEvent: CardClickEventHandler, isMatched: false},
        {id: 1, showFront: false, imgFront: "/apple.jpg", imgBack: "/background.jpg", canFlip: true, CardClickEvent: CardClickEventHandler, isMatched: false},
        {id: 2, showFront: false, imgFront: "/banana.jpg", imgBack: "/background.jpg", canFlip: true, CardClickEvent: CardClickEventHandler, isMatched: false},
        {id: 3, showFront: false, imgFront: "/banana.jpg", imgBack: "/background.jpg", canFlip: true, CardClickEvent: CardClickEventHandler, isMatched: false},
        {id: 4, showFront: false, imgFront: "/orange.jpg", imgBack: "/background.jpg", canFlip: true, CardClickEvent: CardClickEventHandler, isMatched: false},
        {id: 5, showFront: false, imgFront: "/orange.jpg", imgBack: "/background.jpg", canFlip: true, CardClickEvent: CardClickEventHandler, isMatched: false},
        {id: 6, showFront: false, imgFront: "/strawberry.jpg", imgBack: "/background.jpg", canFlip: true, CardClickEvent: CardClickEventHandler, isMatched: false},
        {id: 7, showFront: false, imgFront: "/strawberry.jpg", imgBack: "/background.jpg", canFlip: true, CardClickEvent: CardClickEventHandler, isMatched: false},
        {id: 8, showFront: false, imgFront: "/plum.jpg", imgBack: "/background.jpg", canFlip: true, CardClickEvent: CardClickEventHandler, isMatched: false},
        {id: 9, showFront: false, imgFront: "/plum.jpg", imgBack: "/background.jpg", canFlip: true, CardClickEvent: CardClickEventHandler, isMatched: false},
        {id: 10, showFront: false, imgFront: "/pear.jpg", imgBack: "/background.jpg", canFlip: true, CardClickEvent: CardClickEventHandler, isMatched: false},
        {id: 11, showFront: false, imgFront: "/pear.jpg", imgBack: "/background.jpg", canFlip: true, CardClickEvent: CardClickEventHandler, isMatched: false}
    ];

    useEffect( () => {
        setCardObjects([...cards.sort(() => Math.random() - 0.5)]);
    }, []);

    function CardClickEventHandler(id: number){
        setCardClickedId((prevCardClickedId) => [...prevCardClickedId, id]);
    };

    // Show front on clicked cards & disable click
    cardClickedId.forEach((id) => {
        const card = cardObjects.find(card => card.id === id);
        if (card){
            card.canFlip = false;
            card.showFront = true;
        }
    });

    // Check if two cards (or more) cards are clicked
    if(cardClickedId.length >= 2) {
        const card1 = cardObjects.find(card => card.id === cardClickedId[0]);
        const card2 = cardObjects.find(card => card.id === cardClickedId[1]);
        if(card1 && card2) {
            if(card1.imgFront === card2.imgFront) {
                // We have a match
                card1.isMatched = true;
                card1.canFlip = false;
                card2.isMatched = true;
                card2.canFlip = false;
                setCardClickedId([]); // Reset clicked cards
            } else {
                // No match, disable clicks, wait 1 secs and flip back
                cardObjects.forEach((card) => card.canFlip = false); // Disable click on all cards
                setTimeout(() => {
                    card1.showFront = false;
                    card2.showFront = false;
                    // Enable click on all cards that are not matched
                    cardObjects.forEach((card) => {
                        if(!card.isMatched) 
                            card.canFlip = true;
                        });
                    setCardClickedId([]); // Reset clicked cards
                }, 1000);
            }
        }
    }

    const cardElements = cardObjects.map((card: CardProps) => <Card key={card.id} id={card.id} showFront={card.showFront} imgFront={card.imgFront} imgBack={card.imgBack} canFlip={card.canFlip} CardClickEvent={card.CardClickEvent} />);

    return (
        <article className="card-container">
            {cardElements}
        </article>
    )
}

export default Board