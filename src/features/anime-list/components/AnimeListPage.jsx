import { useState } from "react";
import { useAnimeList } from "../hooks/useAnimeList";

function AnimeListPage() {
  const [page] = useState(1);
  const { anime, loading, error } = useAnimeList(page, 10);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Anime List</h1>

      {anime.map((item) => (
        <div key={item.id}>
          <h3>
            {item.attributes.titles?.en || item.attributes.canonicalTitle}
          </h3>
          <p>{item.attributes.titles?.ja_jp}</p>
        </div>
      ))}
    </div>
  );
}

export default AnimeListPage;
