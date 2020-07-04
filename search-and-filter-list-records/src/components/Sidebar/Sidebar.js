import React from "react";
import { FormGroup } from "react-bootstrap";
const Sidebar = ({ cuisineHandler, sortHandler, sortSelected, cuisineSelected }) => {
	return (
		<aside>
			<FormGroup>
				<select className="form-control" value={cuisineSelected} onChange={cuisineHandler} name="cuisine" id="cuisine">
					<option value="">------ Choose cuisine ------</option>
					<option value="french">French</option>
					<option value="dutch">Dutch</option>
				</select>
			</FormGroup>
			<FormGroup>
				<select name="sort" value={sortSelected} onChange={sortHandler} className="form-control" id="sort">
					<option value="0">Rating</option>
					<option value="1">Low to high</option>
					<option value="2">High to low</option>
				</select>
			</FormGroup>
		</aside>
	);
};

export default Sidebar;
