import MovieItem from "@/components/movie-item";
import style from "./page.module.css";
import { MovieData } from "@/types";

async function AllMovies() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`,
    { cache: "force-cache" }
  );
  if (!response.ok) {
    <div>오류가 발생했습니다...</div>;
  }
  const allMovies: MovieData[] = await response.json();
  return (
    <div className={style.all_container}>
      {allMovies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}
async function RecoMovies() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/random`,
    { next: { revalidate: 3 } }
  );
  if (!response.ok) {
    <div>오류가 발생했습니다...</div>;
  }
  const recoMovies: MovieData[] = await response.json();
  return (
    <div className={style.reco_container}>
      {recoMovies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}
export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <RecoMovies />
      </section>
      <section>
        <h3>등록된 모든 영화</h3>

        <AllMovies />
      </section>
    </div>
  );
}
