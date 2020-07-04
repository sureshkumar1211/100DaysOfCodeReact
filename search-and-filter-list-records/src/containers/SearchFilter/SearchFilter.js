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
		sortBy: 0,
		cuisines: [],
	};

	componentDidMount() {
		this.setState({ cuisines: cuisineData });
	}

	cuisineOnChangeHandler = (e) => {
		console.log(e.target.value);
	};

	sortOnChangeHandler = (e) => {
		let value = e.target.value;
		switch (value) {
			case 1: {
			}
			case 2: {
			}
			default:
				return this.state.cousines;
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
