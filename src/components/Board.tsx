import './Board.css'
import { JSX, useState, useEffect } from 'react';
import {Card, CardProps} from './Card'

export type CardObj = {
    id: number;
    imgFront: string;
    isFlippable: boolean;
    flip: boolean;
};

const cards: CardObj[] = [
    {id: 0, imgFront: "/apple.jpg", isFlippable: true, flip: false},
    {id: 1, imgFront: "/apple.jpg", isFlippable: true, flip: false},
    {id: 2, imgFront: "/banana.jpg", isFlippable: true, flip: false},
    {id: 3, imgFront: "/banana.jpg", isFlippable: true, flip: false},
    {id: 4, imgFront: "/orange.jpg", isFlippable: true, flip: false},
    {id: 5, imgFront: "/orange.jpg", isFlippable: true, flip: false},
    {id: 6, imgFront: "/strawberry.jpg", isFlippable: true, flip: false},
    {id: 7, imgFront: "/strawberry.jpg", isFlippable: true, flip: false},
    {id: 8, imgFront: "/plum.jpg", isFlippable: true, flip: false},
    {id: 9, imgFront: "/plum.jpg", isFlippable: true, flip: false},
    {id: 10, imgFront: "/pear.jpg", isFlippable: true, flip: false},
    {id: 11, imgFront: "/pear.jpg", isFlippable: true, flip: false}
];

export type BoardProps = {
    dummy: string;
}

function Board({dummy}: BoardProps) {

    // const [cards, setCards] = useState<CardObj>(cardElements);
    const [ cardObjects, setCardObjects ] = useState<CardObj[]>([]);
    const [ selectedCards, setSelectedCards ] = useState<CardObj[]>([]);

    const handleFlipEvent = (id: number, flipped: boolean) => {

        
        const flippedCard = (cardObjects.find(card => card.id === id))
        if (flippedCard) {
            setSelectedCards([...selectedCards, flippedCard]);
        }

        if (selectedCards.length === 2) {
            if (selectedCards[0].imgFront === selectedCards[1].imgFront) {
                selectedCards[0].isFlippable = false;
                selectedCards[1].isFlippable = false;
                setSelectedCards([]);
            } else {
                // cardObjects.forEach(card => card.isFlippable = false)
                setTimeout(() => {
                    selectedCards[0].flip = true;
                    selectedCards[1].flip = true;
                    setSelectedCards([]);

                },2000)

            }
        }
    };
    
    // const tempCards = [...cardObjects].forEach(card => card.flip = false);

    useEffect(() => { 
        setCardObjects(cards.sort(() => Math.random() - 0.5));
    }, []);

    // useEffect(() => {
    //     setCardObjects(cardObjects.map((card) => {
    //         console.log(cardObjects)
    //         return {...card, flip: false}
    //     }));
    // }, [cardObjects])

    const cardElements = cardObjects.map((card: CardObj) => <Card key={card.id} id={card.id} imgFront={card.imgFront} onFlipEvent={handleFlipEvent} flippable={card.isFlippable} flip={card.flip}/>);

    return (
        <article className="card-container">
            {cardElements}
        </article>
    )
}

export default Board