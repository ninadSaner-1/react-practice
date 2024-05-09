import { useContext } from "react";
import styles from "./Message.module.scss";
import { MessageProps } from "./Message.types.ts";
import { InputContext } from "../../App.context.tsx";

const Message = ({}: MessageProps) => {
	const { value } = useContext(InputContext);

	return <div>{value} </div>;
};

export default Message;
