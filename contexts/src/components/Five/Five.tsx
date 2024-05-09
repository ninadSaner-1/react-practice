import { memo, useContext } from "react";
import styles from "./Five.module.scss";
import { FiveProps } from "./Five.types.ts";
import { AppContext } from "../../App.context.tsx";
import { IAppContext } from "../../App.types.ts";
let counter = 0;
const Five = ({}: FiveProps) => {
	const { text, setText } = useContext(AppContext);
counter++;
	return (
		<>
			<p>Five: {counter/2} {text}</p>
			<button
				onClick={() => {
					console.log("hi");
					setText(`${text} Hi!`);
				}}
			>
				Hi! Click Me
			</button>
		</>
	);
};

export default memo(Five);
