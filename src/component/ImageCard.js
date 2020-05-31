import React from 'react';

const imageCard = (props) => {
    return (
        <div className="box">
            {props.items.map(cardItem => {
                return (
                    <a className="box--card" href={cardItem.to} key={cardItem.key}>
                        <div className="box--imgBx">
                            <img src={cardItem.src} alt="images"/>
                        </div>
                        <div className="box--details">
                            <h2>Portrait</h2>
                        </div>
                    </a>
                )
            })}
        </div>
    );
}

export default imageCard;