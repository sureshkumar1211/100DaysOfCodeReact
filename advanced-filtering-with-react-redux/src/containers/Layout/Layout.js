//IMPORT PACKAGE MODULES
import React from "react";
import { connect } from "react-redux";

//IMPORT PROJECT MODULES
import Hero from "../../components/Hero/Hero";
import SelectInput from "../../components/SelectInput/SelectInput";
import CardList from "../../components/CardList/CardList";

const Layout = ({ state: { users, sortBy } }) => {
	return (
		<div className="container">
			<Hero />
			<SelectInput />
			<CardList users={users} />
		</div>
	);
};

const mapStateToProps = (state) => {
	return { state };
};

const mapDispatchToProps = (state) => {
	return { state };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
