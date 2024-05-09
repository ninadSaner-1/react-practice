import { Navigate, useNavigate } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";
import { NotFoundPageProps } from "./NotFoundPage.types.ts";
import { useEffect } from "react";

const NotFoundPage = ({}: NotFoundPageProps) => {
  /* const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, []);
 */
  return (
    <>
      {/* akusgdakusdakusdasiudy */}
      <Navigate to="/home" />
    </>
  );
};

export default NotFoundPage;
