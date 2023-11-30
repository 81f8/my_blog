"use client";
import Container from "@/component/Container/Container";
import Header from "@/component/Header/Header";
import styles from "./page.module.css";
import { Card } from "@/component/Card/Card";
import { Footer } from "@/component/Footer/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [list, setList] = useState([]);

  const fetchblogs = async () => {
    const res =
      await fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=10
    `);
    const data = await res.json();
    setList(data.blogs);
  };

  useEffect(() => {
    fetchblogs();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.cover}>
        <div className={styles.overlay}>
          <Container>
            <div className={styles.title}>
              <h1>Simple Blog</h1>
              <p>A blog created by aon 2023</p>
            </div>
          </Container>
        </div>
      </div>
      <Container>
        <div className={styles.grid}>
          {list.map((blog, i) => (
            <Card key={i} blog={blog} />
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
}
