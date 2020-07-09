import React from "react";

const Card = ({ name, company: { catchPhrase, name: companyName, bs } }) => {
	return (
		<div className="column is-3">
			<div className="card">
				<header className="card-header">
					<p className="card-header-title">{name}</p>
					<a href="/test" className="card-header-icon" aria-label="more options">
						<span className="icon">
							<i className="fas fa-angle-down" aria-hidden="true"></i>
						</span>
					</a>
				</header>
				<div className="card-content">
					<div className="content">
						{companyName}
						<br />
						{catchPhrase}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
