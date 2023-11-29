"use client";
import Link from "next/link";
import { Container } from "../Container/Container";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <h2>ano 2023</h2>
          <div className={styles.admin}>
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/help">Help</Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
