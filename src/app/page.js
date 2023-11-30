"use client";
import Container from "@/component/Container/Container";
import Header from "@/component/Header/Header";
import styles from "./page.module.css";
import { Card } from "@/component/Card/Card";
import { Footer } from "@/component/Footer/Footer";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import LinearProgress from "@mui/material/LinearProgress";

export default function Home() {
  const [list, setList] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchBlogs = async (offset = 0) => {
    const res = await fetch(
      `https://api.slingacademy.com/v1/sample-data/blog-posts?offset=${offset}&limit=10`
    );
    const data = await res.json();
    if (data.blogs.length === 0) {
      setHasMore(false);
    } else {
      setList((prevBlogs) => [...prevBlogs, ...data.blogs]);
    }
  };

  useEffect(() => {
    fetchBlogs();
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
        <div className={styles.scroller}>
          <InfiniteScroll
            dataLength={list.length}
            next={() => fetchBlogs(list.length)}
            hasMore={hasMore}
            loader={
              <div className={styles.loader}>
                <LinearProgress />
                <LinearProgress />
              </div>
            }
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>no more blogs</b>
              </p>
            }
          >
            <div className={styles.grid}>
              {list.map((blog, i) => (
                <Card key={i} blog={blog} />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </Container>
      <Footer />
    </>
  );
}
