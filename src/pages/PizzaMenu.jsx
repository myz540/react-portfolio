import styles from "./PizzaMenu.module.css";
import pizzaData from "../components/PizzaMenu/data";
import React from "react";

function PizzaMenu() {
  return (
    <div className={styles.pizzaMenuContainer}>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div>
      <header className={styles.header}>
        <h1>Fast React Pizza Company</h1>
      </header>
    </div>
  );
}

function Menu() {
  return (
    <main className={styles.menu}>
      <h2>Menu</h2>
      <React.Fragment>
        <p>This is a restaurant I suppose</p>
        <ul className={styles.pizzas}>
          {pizzaData.map((p) => (
            <Pizza pizza={p} key={p.name} />
          ))}
        </ul>
      </React.Fragment>
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className={styles.footer}>
      {isOpen ? <Order closeHour={closeHour} /> : "Sorry we're closed"}
    </footer>
  );
}

function Order(props) {
  return (
    <div className={styles.order}>
      <p>We're Open until {props.closeHour}:00</p>
      <button className={styles.btn}>Order</button>
    </div>
  );
}

function Pizza({ pizza }) {
  return (
    <li className={pizza.soldOut ? styles.pizzaSoldOut : styles.pizza}>
      <img src={pizza.photoName} alt={pizza.name}></img>
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "Sold out" : pizza.price}</span>
      </div>
    </li>
  );
}

export default PizzaMenu;
