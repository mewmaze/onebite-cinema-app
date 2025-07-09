import Link from "next/link";
import { MovieData } from "@/types";
import style from "./movie-item.module.css";
export default function MovieItem(props: MovieData) {
  return (
    <Link className={style.container} href={`/movie/${props.id}`}>
      <img src={props.posterImgUrl} />
    </Link>
  );
}
