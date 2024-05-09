import { Link, Outlet, useLoaderData } from "react-router-dom";
import styles from "./HomePage.module.scss";
import { HomePageProps } from "./HomePage.types.ts";

const HomePage = ({}: HomePageProps) => {
  const data = useLoaderData();

  console.log(data);
  
  return (
    <>
      <div>
        <Link to="profile">Profile</Link>
        <Link to="photos">Photos</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default HomePage;
