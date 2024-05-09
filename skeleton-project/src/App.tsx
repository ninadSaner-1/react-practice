import styles from "./App.module.scss";
import { Component, ReactNode } from "react";

export const App = () => {
	return (
		<div className={styles.App}>
			<p>This is app Component</p>
		</div>
	);
};

export class AppComponent extends Component {
	render(): ReactNode {
		return (
			<div className={styles.App}>
				<p>This is app Component</p>
			</div>
		);
	}
}