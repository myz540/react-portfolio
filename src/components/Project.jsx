import styles from "./Project.module.css";
import { Link } from "react-router-dom";

function Project({ title, linkTo, imgSrc, imgAlt }) {
  return (
    <li>
      <Link to={linkTo} className="cta">
        <h2>{title}</h2>
        <img className={styles.image} src={imgSrc} alt={imgAlt} />
      </Link>
    </li>
  );
}

export default Project;
