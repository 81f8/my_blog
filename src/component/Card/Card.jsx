import Link from "next/link";
import style from "./Card.module.css";

export const Card = () => {
  return (
    <div className={style.card}>
      <div className={style.img}>
        <p className={style.title}>FIRST BLOG TITL...</p>
        <p className={style.subtitle}> By Aon 2034</p>
        <div className={style.footer}>
            <Link href={"/"}>Read Article</Link>
            <span>June 19,2020</span>
        </div>
      </div>
    </div>
  );
};
