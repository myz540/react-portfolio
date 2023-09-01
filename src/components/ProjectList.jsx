import styles from "./ProjectList.module.css";

function ProjectList({ children }) {
  return (
    <div className={styles.projects}>
      <ul>{children}</ul>
    </div>
  );
}

export default ProjectList;
