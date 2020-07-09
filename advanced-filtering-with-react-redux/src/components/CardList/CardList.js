import React from "react";
import Card from "./Card/Card";

const CardList = ({ users }) => {
	let cardList = users.map((user) => {
		return <Card key={user.id} {...user} />;
	});
	return <div className="mt-4">{cardList}</div>;
};

export default CardList;
