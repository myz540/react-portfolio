import styles from "./ProjectList.module.css";

function ProjectList({ children }) {
  return <ul className={styles.projects}>{children}</ul>;
}

export default ProjectList;
