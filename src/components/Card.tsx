import './Card.css'
import React, { JSX, useState } from 'react';

export type CardProps = {
    id: number;
    onClickEvent: React.MouseEventHandler<HTMLImageElement>;
};


function Card({id, onClickEvent}: CardProps): JSX.Element {
    const imgBack = "/background.jpg";
    const [flipped, setFlipped] = useState(false);
    const [isFlippable, setIsFlippable] = useState(true);

    return (
        <img className="card" src={imgBack} alt={name + "avatar image"} onClick={onClickEvent} />
    )
}

export default Card