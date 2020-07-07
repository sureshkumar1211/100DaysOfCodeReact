import React from "react";
import { Row } from "react-bootstrap";
import Card from "./Card/Card";
const CardList = ({ cuisines }) => {
	console.log(cuisines);
	let cuisineList = cuisines.length ? (
		cuisines.map((cuisine, index) => <Card key={index} {...cuisine} />)
	) : (
		<span className="text-center w-100">No results found</span>
	);
	return <Row>{cuisineList}</Row>;
};

export default CardList;
