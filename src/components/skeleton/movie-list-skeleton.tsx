import MovieItemSkeleton from "./movie-item-skeleton";
import style from "./movie-list-skeleton.module.css";
type Props = {
  count: number;
  variant: "reco" | "all";
};
export default function MovieListSkeleton({ count, variant }: Props) {
  const containerClass =
    variant === "reco" ? style.reco_container : style.all_container;
  return (
    <div className={style.container}>
      <div className={containerClass}>
        {Array.from({ length: count }).map((_, i) => (
          <MovieItemSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
