import React from 'react';

const imageCard = (props) => {
    return (
        <div className="box">
            {props.items.map(cardItem => {
                return (
                    <a className="box--card" href={cardItem.to} key={cardItem.key}>
                        <div className="box--imgBx">
                            <img src={cardItem.imageURL} alt="images"/>
                        </div>
                        <div className="box--details">
                            <h2>{cardItem.title}</h2>
                        </div>
                    </a>
                )
            })}
        </div>
    );
}

export default imageCard;