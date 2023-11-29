import Container from "@/component/Container/Container";
import Header from "@/component/Header/Header";
import styles from "./page.module.css";

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
        <div>sssssssss</div>
    </>
  );
}
