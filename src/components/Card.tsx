import './Card.css'
import React, { JSX, useState } from 'react';

export type CardProps = {
    id: number;
    imgFront: string;
    onFlipEvent: (id: number, flipped: boolean) => void;
};


export function Card({id, imgFront, onFlipEvent}: CardProps): JSX.Element {
    const imgBack = "/background.jpg";
    const [cardId, setCardId] = useState<number>(id);
    const [flipped, setFlipped] = useState<boolean>(false);

    const [isFlippable, setIsFlippable] = useState(true);

    const onClickEvent: React.MouseEventHandler<HTMLImageElement> = (e:React.MouseEvent) => { 
        if (isFlippable) {
            setFlipped(!flipped);
            onFlipEvent(cardId, flipped);
        }
    };

    const imgSrc = (flipped) ? imgFront : imgBack;
    
    return (
        <img className="card" src={imgSrc} alt={name + "avatar image"} onClick={onClickEvent} />
    )
}
