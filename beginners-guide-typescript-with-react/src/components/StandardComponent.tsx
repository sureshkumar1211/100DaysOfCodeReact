import * as React from "react";

export interface StandardComponentProps {
	title?: string;
	children: React.ReactNode;
}

const StandardComponent = ({ title, children }: StandardComponentProps) => {
	return (
		<div>
			{title}:{children}
		</div>
	);
};

export default StandardComponent;
