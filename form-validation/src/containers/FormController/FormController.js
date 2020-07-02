import React, { useState, Fragment } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useFormik } from "formik";
import InputGroup from "../../components/InputGroup/InputGroup";

const FormController = () => {
	const [valid, setValid] = useState(false);
	const validate = (values) => {
		const errors = {};
		if (!values.lastName) {
			errors.lastName = "Required";
		}
		if (!values.email) {
			errors.email = "Required";
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
			errors.email = "Invalid email address";
		}
		if (!values.password) {
			errors.password = "Required";
		} else if (!/^[A-Za-z]\w{7,14}$/.test(values.password)) {
			errors.password = "Invalid password";
		}
		return errors;
	};
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		},
		validate,
		onSubmit: () => {
			setValid(true);
			setTimeout(() => {
				setValid(false);
			}, 2000);
		},
	});
	return (
		<Fragment>
			<Form onSubmit={formik.handleSubmit}>
				<InputGroup type="text" formik={formik} name="firstName" label="First Name" />
				<InputGroup type="text" formik={formik} name="lastName" label="Last Name" />
				<InputGroup type="email" formik={formik} name="email" label="Email" />
				<InputGroup type="password" formik={formik} name="password" label="Password" />
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
			{valid && (
				<Alert className="mt-3" variant="success">
					Validation successful
				</Alert>
			)}
		</Fragment>
	);
};

export default FormController;
