import styles from "../../pages/UsePopcorn.module.css";

export default function ErrorMessage({ errorMessage }) {
  return <p className={styles.error}>{errorMessage}</p>;
}
