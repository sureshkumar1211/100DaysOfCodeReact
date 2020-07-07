import React from "react";
import { FormGroup } from "react-bootstrap";
const Sidebar = ({ cuisineHandler, sortHandler, sortSelected, cuisineSelected }) => {
	return (
		<aside>
			<FormGroup>
				<select className="form-control" value={cuisineSelected} onChange={cuisineHandler} name="cuisine" id="cuisine">
					<option value="any">Choose Any</option>
					<option value="French">French</option>
					<option value="Dutch">Dutch</option>
					<option value="Europea">Europea</option>
					<option value="European">European</option>
					<option value="Vegetarian Friendly">Vegetarian Friendly</option>
					<option value="Gluten Free Option">Gluten Free Option</option>
					<option value="Mediterranean">Mediterranean</option>
					<option value="International">International</option>
					<option value="Vegan Option">Vegan Option</option>
					<option value="Contemporary">Contemporary</option>
					<option value="Vegan Options">Vegan Options</option>
					<option value="Asian">Asian</option>
					<option value="Indonesian">Indonesian</option>
					<option value="Japanese">Japanese</option>
					<option value="Seafood">Seafood</option>
					<option value="Fast Foo">Fast Foo</option>
					<option value="American">American</option>
					<option value="Bar">Bar</option>
					<option value="Central European">Central European</option>
					<option value="Pu">Pu</option>
					<option value="Cafe">Cafe</option>
					<option value="British">British</option>
					<option value="Healthy">Healthy</option>
					<option value="Indian">Indian</option>
					<option value="Tibetan">Tibetan</option>
					<option value="Nepali">Nepali</option>
					<option value="Italian">Italian</option>
					<option value="Vegetarian Friendl">Vegetarian Friendl</option>
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
