import * as React from "react";
import StandardComponent from "./StandardComponent";
import StringLiteral from "./StringLiteral";
const { Fragment } = React;

export interface HelloWorldProps {
	userName: string;
	lang: string;
}
export const App = (props: HelloWorldProps) => (
	<Fragment>
		<h1>
			Hi {props.userName} from React! Welcome to {props.lang}!
		</h1>
		<StandardComponent title={props.userName}>React developer</StandardComponent>
		<StringLiteral role="senior" />
	</Fragment>
);
