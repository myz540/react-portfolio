import { useRef, useEffect } from "react";
import { useKey } from "./useKey";
import styles from "../../pages/UsePopcorn.module.css";

export function NavBar({ children }) {
  return (
    <nav className={styles.navBar}>
      <Logo />
      {children}
    </nav>
  );
}

export function Logo() {
  return (
    <div className={styles.logo}>
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

export function Search({ query, setQuery }) {
  const inputEl = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  useEffect(
    function () {
      function callback(e) {
        if (document.activeElement === inputEl.current) return;
        if (e.code === "Enter") {
          inputEl.current.focus();
          setQuery("");
        }
      }
      document.addEventListener("keydown", callback);
    },
    [setQuery]
  );
  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}

export function NumResults({ movies }) {
  return (
    <p className={styles.numResults}>
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
