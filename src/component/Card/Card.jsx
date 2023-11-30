import Link from "next/link";
import style from "./Card.module.css";
import Image from "next/image";
import dayjs from "dayjs";

export const Card = ({ blog }) => {
  return (
    <div className={style.card}>
      <div className={style.img}>
        <Image src={blog.photo_url} alt={blog.title} fill='true' objectFit='cover' />
      </div>
      <p className={style.title}>{blog.title}</p>
      <p className={style.subtitle}>{blog.description}</p>
      <div className={style.footer}>
        <Link href={`/article/${blog.id}`}>Read Article</Link>
        <span>{dayjs(blog.created_at).format('MMMM D, YYYY')}</span>
      </div>
    </div>
  );
};
