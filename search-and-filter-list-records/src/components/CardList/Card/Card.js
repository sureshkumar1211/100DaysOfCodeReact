import React from "react";

const Card = ({ Name, City, Ranking, Rating }) => {
	return (
		<section className="col-md-4 mb-4">
			<div className="card h-100">
				<header>
					<h4 className="card-header">{City}</h4>
				</header>
				<section className="card-body">
					<p className="card-text">{Name}</p>
					<p className="card-text">
						<strong>Ranking: </strong>
						{Ranking}
					</p>
					<p className="card-text">
						<strong>Rating: </strong>
						{Rating}
					</p>
				</section>
				<footer className="card-footer">
					<button className="btn btn-primary">Learn More</button>
				</footer>
			</div>
		</section>
	);
};

export default Card;
