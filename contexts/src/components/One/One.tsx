import { memo, useMemo } from "react";
import Two from "../Two/Two.tsx";
import styles from "./One.module.scss"; 
import { OneProps } from "./One.types.ts" 
 let counter = 0;

const One = ({}: OneProps) => {
	counter++;
	return (
		<>
			<p>One: {counter / 2} </p>
			<Two  />
		</>
	);  
} 
 
export default memo(One) 
