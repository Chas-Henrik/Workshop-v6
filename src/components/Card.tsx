import './Card.css'
import React, { JSX } from 'react';

export type CardProps = {
    id: number;
    showFront: boolean;
    imgFront: string;
    imgBack: string;
    canFlip: boolean;
    CardClickEvent: (id: number) => void;
};


export function Card({id, showFront, imgFront, imgBack, canFlip, CardClickEvent}: CardProps): JSX.Element {
    const imgSrc = showFront ? imgFront : imgBack;

    const ClickEventHandler: React.MouseEventHandler<HTMLImageElement> = () => { 
        CardClickEvent(id);
    };

    return (
        <img className="card" src={imgSrc} alt={"card image"} onClick={canFlip ? ClickEventHandler : undefined} />
    )
}
