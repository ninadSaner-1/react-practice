import Message from "../Message/Message.tsx";
import styles from "./Right.module.scss";
import { RightProps } from "./Right.types.ts";

const Right = ({}: RightProps) => {
	return (
		<div
			style={{
				padding: "1.5rem",
				border: "4px solid red",
			}}
		>
			<div
				style={{
					padding: "1.5rem",
					border: "4px solid orange",
				}}
			>
				<Message />
			</div>
		</div>
	);
};

export default Right;
