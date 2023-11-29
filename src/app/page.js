import Container from "@/component/Container/Container";
import Header from "@/component/Header/Header";
import styles from "./page.module.css";
import { Card } from "@/component/Card/Card";

const list = [{}, {}, {}, {}, {}, {}];

export default function Home() {
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
        {list.map((item, i) => (
          <Card />
        ))}
      </Container>
    </>
  );
}
