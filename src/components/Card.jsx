import React from 'react';

const Card = ({model, price,image}) => {
	return (
		<div className="card">
			<div className="favorite">
				<img src="/img/heart-unliked.svg" alt="Unliked" />
			</div>
			<img width={133} height={112} src={image} alt="Sneakers" />
			<h5>{model}</h5>
			<div className="d-flex justify-between align-center">
				<div className="d-flex flex-column ">
					<span>Цена</span>
					<b>{price} руб.</b>
				</div>
				<button className="button">
					<img width={11} height={11} src="/img/plus.svg" alt="Plus" />
				</button>
			</div>
		</div>
	);
};

export default Card;
