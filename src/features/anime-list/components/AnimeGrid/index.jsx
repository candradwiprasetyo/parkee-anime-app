import AnimeCard from "../AnimeCard";
import SkeletonLoader from "../SkeletonLoader";
import { Grid } from "./styles";

function AnimeGrid({ anime, loading }) {
  if (loading) {
    return (
      <Grid>
        {Array.from({ length: 10 }).map((_, index) => (
          <SkeletonLoader key={index} />
        ))}
      </Grid>
    );
  }

  return (
    <Grid>
      {anime.map((item) => (
        <AnimeCard key={item.id} anime={item} />
      ))}
    </Grid>
  );
}

export default AnimeGrid;
