import './Card.css'
import React, { JSX, useState } from 'react';

export type CardProps = {
    id: number;
    imgFront: string;
    onClickEvent: React.MouseEventHandler<HTMLImageElement>;
};


export function Card({id, imgFront, onClickEvent}: CardProps): JSX.Element {
    const imgBack = "/background.jpg";
    const [flipped, setFlipped] = useState(false);
    const [isFlippable, setIsFlippable] = useState(true);

    const imgSrc = (flipped) ? imgFront : imgBack;
    return (
        <img className="card" src={imgSrc} alt={name + "avatar image"} onClick={onClickEvent} />
    )
}
