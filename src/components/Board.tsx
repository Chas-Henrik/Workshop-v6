import './Board.css'
import { useState, useEffect } from 'react';
import {Card, CardProps} from './Card'


const cards: string[] = [
    "/apple.jpg",
    "/apple.jpg",
    "/banana.jpg",
    "/banana.jpg",
    "/orange.jpg",
    "/orange.jpg",
    "/strawberry.jpg",
    "/strawberry.jpg",
    "/plum.jpg",
    "/plum.jpg",
    "/pear.jpg",
    "/pear.jpg"
];

export type BoardProps = {
    cardArr: CardProps[];
}

export function Board({cardArr}: BoardProps) {
    const handleCardClick = (e: React.MouseEvent<HTMLImageElement>) => console.log(e.target);
    const cardElements = cardArr.map((card: CardProps, index) => <Card id={index} imgFront="" onClickEvent={handleCardClick}/>);
    const [cards, setCards] = useState(cardElements);

    useEffect(() => { 
        
    }, []);

    return (
        <article className="card-container">
            {cardElements}
        </article>
    )
}

export default Board