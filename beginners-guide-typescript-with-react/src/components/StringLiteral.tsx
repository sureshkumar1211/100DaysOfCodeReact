import * as React from "react";

type Role = {
	role: "junior" | "senior";
};

const StringLiteral = ({ role }: Role) => {
	return <div>{role}</div>;
};

export default StringLiteral;
