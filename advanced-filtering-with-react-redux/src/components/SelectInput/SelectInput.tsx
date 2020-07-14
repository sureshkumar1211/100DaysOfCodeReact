import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { sortByAlphabet, sortByPrice } from "../../store/actions";

interface Props {
	state: {
		sortBy: number;
	};
	selected: any;
}

type OnChangeHandler = (e: any) => void;

const SelectInput = ({ state: { sortBy }, selected }: Props) => {
	let selectRef: any = useRef<HTMLInputElement>(null);
	useEffect(() => {
		selected(sortByAlphabet);
		if (selectRef && selectRef.current) {
			selectRef.current.focus();
		}
	}, []);

	let onChangeHandler: OnChangeHandler = (e) => {
		let { value } = e.target;
		if (value === "0") {
			return selected(sortByAlphabet);
		}
		selected(sortByPrice);
	};

	return (
		<div className="select pl-2">
			<select ref={selectRef} value={sortBy} onChange={onChangeHandler}>
				<option value="-1" disabled>
					Sort by
				</option>
				<option value="0">From A-Z</option>
				<option value="1">Sort by Id</option>
			</select>
		</div>
	);
};

const mapStateToProps = (state: object): object => ({ state });
const mapDispatchToProps = (dispatch: any): object => ({
	selected: (callback: any) => dispatch(callback()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectInput);
