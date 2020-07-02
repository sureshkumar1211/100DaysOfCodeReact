import React from "react";
import { Form } from "react-bootstrap";
const InputGroup = ({ name, formik, label, type }) => {
	let { errors, touched, handleChange, handleBlur, values } = formik;
	return (
		<Form.Group controlId={name}>
			<Form.Label>{label}</Form.Label>
			<Form.Control type={type} onChange={handleChange} onBlur={handleBlur} value={values[name]} name={name} />
			{errors[name] && touched[name] ? <Form.Text className="text-danger">{errors[name]}</Form.Text> : null}
		</Form.Group>
	);
};

export default InputGroup;
