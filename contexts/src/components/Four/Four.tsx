import Five from "../Five/Five.tsx";
import styles from "./Four.module.scss"; 
import { FourProps } from "./Four.types.ts" 
 
const Four = ({}: FourProps) => {
	return (
		<>
			<p>Four: </p>
			<Five />
		</>
	); 
} 
 
export default Four 
