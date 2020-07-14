//IMPORT PACKAGE MODULES
import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

//IMPORT PROJECT MODULES
import Hero from "../../components/Hero/Hero";
import SelectInput from "../../components/SelectInput/SelectInput.tsx";
import CardList from "../../components/CardList/CardList";
import { loadData } from "../../store/actions";

const Layout = ({ state: { users }, dispatchLoadData }) => {
	useEffect(() => {
		(async function fetchData() {
			let response = await axios.get("https://jsonplaceholder.typicode.com/users");
			dispatchLoadData(response.data);
		})();
	}, []);
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

const mapDispatchToProps = (dispatch) => {
	return { dispatchLoadData: (payload) => dispatch(loadData(payload)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
