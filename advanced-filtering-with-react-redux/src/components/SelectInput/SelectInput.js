import React, { useEffect } from "react";
import { connect } from "react-redux";
import { sortByAlphabet, sortByPrice } from "../../store/actions";
const SelectInput = ({ state: { sortBy }, selected }) => {
	useEffect(() => {
		selected(sortByAlphabet);
	}, []);

	let onChangeHandler = (e) => {
		let { value } = e.target;
		if (value === "0") {
			return selected(sortByAlphabet);
		}
		selected(sortByPrice);
	};

	return (
		<div className="select pl-2">
			<select value={sortBy} onChange={onChangeHandler}>
				<option value="-1" disabled>
					Sort by
				</option>
				<option value="0">From A-Z</option>
				<option value="1">Sort by Id</option>
			</select>
		</div>
	);
};

const mapStateToProps = (state) => ({ state });
const mapDispatchToProps = (dispatch) => ({
	selected: (callback) => dispatch(callback()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectInput);
