import Four from "../Four/Four.tsx";
import styles from "./Three.module.scss"; 
import { ThreeProps } from "./Three.types.ts" 
 
const Three = ({}: ThreeProps) => {
	return (
		<>
			<p>Three: </p>
			<Four />
		</>
	);  
} 
 
export default Three 
