import { useState } from "react";
import { useAnimeList } from "../hooks/useAnimeList";
import InfiniteScroll from "react-infinite-scroll-component";

function AnimeListPage() {
  const [page, setPage] = useState(1);
  const { anime, loading, error, hasMore } = useAnimeList(page, 10);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Anime List</h1>

      <InfiniteScroll
        dataLength={anime.length}
        next={() => {
          if (!loading) {
            setPage((prev) => prev + 1);
          }
        }}
        hasMore={hasMore}
        loader={<p>Loading...</p>}
        scrollThreshold="200px"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "16px",
            minHeight: "100vh",
          }}
        >
          {anime.map((item) => (
            <div key={item.id}>
              <img
                src={item.attributes.posterImage?.small}
                alt={item.attributes.canonicalTitle}
              />
              <h3>
                {item.attributes.titles?.en || item.attributes.canonicalTitle}
              </h3>
              <p>{item.attributes.titles?.ja_jp}</p>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default AnimeListPage;
