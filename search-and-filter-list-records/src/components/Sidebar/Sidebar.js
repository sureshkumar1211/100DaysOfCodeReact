import React from "react";
import { FormGroup } from "react-bootstrap";
const Sidebar = () => {
	return (
		<aside>
			<FormGroup>
				<select className="form-control" name="cuisine" id="cuisine">
					<option value="french">French</option>
					<option value="dutch">Dutch</option>
				</select>
			</FormGroup>
			<FormGroup>
				<select name="cuisine" className="form-control" id="cuisine">
					<option value="french">French</option>
					<option value="dutch">Dutch</option>
				</select>
			</FormGroup>
		</aside>
	);
};

export default Sidebar;
