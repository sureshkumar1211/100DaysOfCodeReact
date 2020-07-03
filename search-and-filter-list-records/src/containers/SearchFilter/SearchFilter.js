//IMPORT PACKAGE PACKAGES
import React, { Component } from "react";

//IMPORT PROJECT PACKAGES
import cuisineData from "../../data.json";
import Sidebar from "../../components/Sidebar/Sidebar";
import CardList from "../../components/CardList/CardList";

export default class SearchFilter extends Component {
	state = {
		itemsToDisplay: [],
		selectedCuisine: "",
		sortBy: 1,
		cuisines: [],
	};

	componentDidMount() {
		this.setState({ cuisines: cuisineData });
	}

	render() {
		let { cuisines } = this.state;
		return (
			<div className="container">
				<Sidebar />
				<CardList cuisines={cuisines} />
			</div>
		);
	}
}
