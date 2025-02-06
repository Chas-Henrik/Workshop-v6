import './Card.css'
import React, { JSX, useState } from 'react';

export type CardProps = {
    id: number;
    imgFront: string;
    onFlipEvent: (id: number, flipped: boolean) => void;
    flippable: boolean;
    flip: boolean;
};


export function Card({id, imgFront, onFlipEvent, flippable, flip}: CardProps): JSX.Element {
    const imgBack = "/background.jpg";
    const [cardId, setCardId] = useState<number>(id);
    const [flipped, setFlipped] = useState<boolean>(false);

    const [isFlippable, setIsFlippable] = useState(flippable);

    const onClickEvent: React.MouseEventHandler<HTMLImageElement> = (e:React.MouseEvent) => { 
        if (isFlippable) {
            setFlipped((prevflipped) => !prevflipped);
            setIsFlippable(false);
            onFlipEvent(cardId, flipped);
        }
    };

    if (flip) {
        setFlipped((prevflipped) => !prevflipped);
        flip = false;
    }

    const imgSrc = (flipped) ? imgFront : imgBack;

    
    return (
        <img className="card" src={imgSrc} alt={name + "avatar image"} onClick={onClickEvent} />
    )
}
