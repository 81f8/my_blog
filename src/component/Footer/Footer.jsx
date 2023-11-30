"use client";
import Link from "next/link";
import { Container } from "../Container/Container";
import styles from "./Footer.module.css";
import { FaSquareFacebook,FaSquareTwitter, FaSquareInstagram  } from "react-icons/fa6";

export const Footer = () => {
  return (
    <header className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <h3>All Rights Reserved - Aon2023</h3>
          <div className={styles.admin}>
            <Link href="/home">
              <FaSquareFacebook />
            </Link>
            <Link href="/about">
              <FaSquareTwitter />
            </Link>
            <Link href="/help">
              <FaSquareInstagram  />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Footer;
