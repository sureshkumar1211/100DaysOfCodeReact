import React from "react";
import { Row } from "react-bootstrap";
import Card from "./Card/Card";
const CardList = ({ cuisines }) => {
	console.log(cuisines);
	let cuisineList = cuisines.map((cuisine, index) => <Card key={index} {...cuisine} />);
	return <Row>{cuisineList}</Row>;
};

export default CardList;
