import Container from "@/component/Container/Container";
import Footer from "@/component/Footer/Footer";
import Header from "@/component/Header/Header";
import dayjs from "dayjs";
import styles from "./page.module.css";
import Image from "next/image";

async function getData(id) {
  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
  );

  if (!res.ok) {
    // This will activate the closest error.js Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Article({ params }) {
  let data = await getData(params.id);
  console.log(data);
  return (
    <main>
      <Header />
      <Container>
        <div className={styles.title}>
          <h1>{data.blog.title}</h1>
        </div>

        <div className={styles.head}>
          <p>By Aon 2023</p>
          {dayjs(data.blog.updated_at).format("MMMM D, YYYY")}
        </div>
        <div className={styles.cover}>
            <Image src={data.blog.photo_url} fill objectFit="cover" />
        </div>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: data.blog.content_html }}
        />
      </Container>

      <Footer />
    </main>
  );
}
