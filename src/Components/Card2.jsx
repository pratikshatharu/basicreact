import React from 'react';
import ReactDOM from 'react-dom';



function Card(props) {
    console.log(props);
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img
                        src={props.imgsrc}
                        alt="photo"
                        className="card__img"
                    />
                    <div className="card__info">
                        <h3 className="card__category">{props.title} </h3>
                        <h5 className="card__title">{props.sname} </h5>
                        <a href={props.link}
                            target="_blank">
                            <button className="button">Buy Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>

    );
}
export default Card;