import ProjectList from "../components/ProjectList";
import Project from "../components/Project";

import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <section>
        <h1>Mike Zhong's React Portfolio</h1>
        <h2>
          Projects completed as part of{" "}
          <a href="https://www.udemy.com/course/the-ultimate-react-course/">
            this Udemy course
          </a>
        </h2>
        <ProjectList>
          <Project
            title="Pizza Menu"
            linkTo="pizza-menu"
            imgSrc="PizzaMenu/pizza-menu.png"
            imgAlt="pizza-menu"
          />
          <Project
            title="Far Away"
            linkTo="travel-list"
            imgSrc="TravelList/travel-list.png"
            imgAlt="travel-list"
          />
          <Project
            title="Eat-N-Split"
            linkTo="eat-n-split"
            imgSrc="EatNSplit/eat-n-split.png"
            imgAlt="eat-n-split"
          />
          <Project
            title="Use Popcorn"
            linkTo="use-popcorn"
            imgSrc="UsePopcorn/use-popcorn.png"
            imgAlt="use-popcorn"
          />
          <Project
            title="React Quiz"
            linkTo="react-quiz"
            imgSrc="wip.png"
            imgAlt="wip"
          />
        </ProjectList>
      </section>
    </main>
  );
}
