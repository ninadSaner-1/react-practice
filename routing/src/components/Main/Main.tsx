import { Outlet } from "react-router-dom";
import styles from "./Main.module.scss"; 
import { MainProps } from "./Main.types.ts" 
 
const Main = ({}: MainProps) => { 
    return <Outlet />
} 
 
export default Main 
