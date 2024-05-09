import { FormEvent } from "react";
import styles from "./Left.module.scss";
import { LeftProps } from "./Left.types.ts";
import Form from "../Form/Form.tsx";

const Left = ({}: LeftProps) => {
	return (
		<div
			style={{
				padding: "1.5rem",
				border: "4px solid red",
				display: "flex",
				placeItems: "flex-end",
			}}
		>
			<div
				style={{
					padding: "1.5rem",
					border: "4px solid orange",
					flex: "1",
				}}
			>
				<Form />
			</div>
		</div>
	);
};

export default Left;
