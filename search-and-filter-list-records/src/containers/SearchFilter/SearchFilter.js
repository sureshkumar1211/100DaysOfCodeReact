//IMPORT PACKAGE PACKAGES
import React, { Component } from "react";

//IMPORT PROJECT PACKAGES
import cuisineData from "../../data.json";
import Sidebar from "../../components/Sidebar/Sidebar";
import CardList from "../../components/CardList/CardList";
import { sortAsc, sortDes } from "../../hof/sort";

export default class SearchFilter extends Component {
	state = {
		itemsToDisplay: [],
		selectedCuisine: "",
		sortBy: 0,
		cuisines: [],
	};

	componentDidMount() {
		this.setState({ cuisines: cuisineData });
	}

	cuisineOnChangeHandler = (e) => {
		let term = e.target.value;
		if (term === "any") {
			return this.setState({ cuisines: [...cuisineData], selectedCuisine: term });
		}
		let cuisines = [...cuisineData];
		let filterCuisines = cuisines.filter((cuisine) => cuisine.Name.includes(term) || cuisine.City.includes(term));
		this.setState({ cuisines: filterCuisines, selectedCuisine: term });
	};

	sortOnChangeHandler = (e) => {
		let value = e.target.value;

		switch (value) {
			case "1": {
				let cuisines = sortAsc(this.state.cuisines, "Rating");
				return this.setState({ cuisines, sortBy: value });
			}
			case "2": {
				let cuisines = sortDes(this.state.cuisines, "Rating");
				return this.setState({ cuisines, sortBy: value });
			}
			default:
				return this.setState({ sortBy: value, cuisines: cuisineData });
		}
	};

	render() {
		let { cuisines, sortBy, selectedCuisine } = this.state;
		return (
			<div className="container">
				<Sidebar
					cuisineHandler={this.cuisineOnChangeHandler}
					sortSelected={sortBy}
					cuisineSelected={selectedCuisine}
					sortHandler={this.sortOnChangeHandler}
				/>
				<CardList cuisines={cuisines} />
			</div>
		);
	}
}
