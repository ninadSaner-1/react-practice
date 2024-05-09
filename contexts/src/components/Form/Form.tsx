import { FormEvent, useContext } from "react";
import styles from "./Form.module.scss";
import { FormProps } from "./Form.types.ts";
import { InputContext } from "../../App.context.tsx";

const Form = ({}: FormProps) => {
	const {setValue} = useContext(InputContext);

	const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		
		const formData = new FormData(event.currentTarget);
		
		console.log(formData.get('message'));
		
		setValue(formData.get('message')?.toString() || '')
	};

	return (
		<form onSubmit={handleOnSubmit}>
			<input type="text" name="message" />
			<button type="submit">Send</button>
		</form>
	);
};

export default Form;
