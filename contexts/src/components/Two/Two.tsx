import Three from "../Three/Three.tsx";
import styles from "./Two.module.scss"; 
import { TwoProps } from "./Two.types.ts" 
 
const Two = ({}: TwoProps) => { 
	return (
		<>
			<p>Two: </p>
			<Three  />
		</>
	); 
} 
 
export default Two 
