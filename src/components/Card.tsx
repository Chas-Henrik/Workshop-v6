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
    const cardContainerClasses = showFront ? "card-container-inner is-flipped" : "card-container-inner";

    const ClickEventHandler: React.MouseEventHandler<HTMLImageElement> = () => { 
        CardClickEvent(id);
    };

    return (
        <div className="card-container">
            <div className={cardContainerClasses}>
                <div className="card-front-frame">
                    <img className="image" src={imgFront} alt={"card image"} onClick={canFlip ? ClickEventHandler : undefined} />
                </div>
                <div className="card-back-frame">
                    <img className="image" src={imgBack} alt={"card image"} onClick={canFlip ? ClickEventHandler : undefined} />
                </div>
            </div>
        </div>
    )
}
