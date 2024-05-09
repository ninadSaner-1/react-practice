import { Link } from "react-router-dom";
import styles from "./Header.module.scss"; 
import { HeaderProps } from "./Header.types.ts" 
 
const Header = ({}: HeaderProps) => { 

    return (
        <header>
            <Link to="home">Home</Link>
            <Link to="contact">Contact</Link>
        </header>
    );
} 
 
export default Header 
