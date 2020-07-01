import React from "react";
const InputGroup = ({ name, label, type, value, handleChange }) => {
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<input type={type} onChange={handleChange} value={value} name={name} id={name} />
		</div>
	);
};

export default InputGroup;
