import './Board.css'
import { JSX, useState, useEffect } from 'react';
import {Card, CardProps} from './Card'

export type CardObj = {
    id: number;
    imgFront: string;
};

const cards: CardObj[] = [
    {id: 0, imgFront: "/apple.jpg"},
    {id: 1, imgFront: "/apple.jpg"},
    {id: 2, imgFront: "/banana.jpg"},
    {id: 3, imgFront: "/banana.jpg"},
    {id: 4, imgFront: "/orange.jpg"},
    {id: 5, imgFront: "/orange.jpg"},
    {id: 6, imgFront: "/strawberry.jpg"},
    {id: 7, imgFront: "/strawberry.jpg"},
    {id: 8, imgFront: "/plum.jpg"},
    {id: 9, imgFront: "/plum.jpg"},
    {id: 10, imgFront: "/pear.jpg"},
    {id: 11, imgFront: "/pear.jpg"}
];

export type BoardProps = {
    dummy: string;
}

function Board({dummy}: BoardProps) {
    const handleFlipEvent = (id: number, flipped: boolean) => console.log(id);
    // const [cards, setCards] = useState<CardObj>(cardElements);
    const [cardElements, setCardElements] = useState<JSX.Element[]>([]);

    useEffect(() => { 
        const shuffledCards = cards.sort(() => Math.random() - 0.5);
        setCardElements(shuffledCards.map((card: CardObj) => <Card key={card.id} id={card.id} imgFront={card.imgFront} onFlipEvent={handleFlipEvent}/>));
    }, []);

    return (
        <article className="card-container">
            {cardElements}
        </article>
    )
}

export default Board