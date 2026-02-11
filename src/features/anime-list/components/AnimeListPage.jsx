import { useState } from "react";
import { useAnimeList } from "../hooks/useAnimeList";
import { useDebounce } from "../hooks/useDebounce";
import InfiniteScroll from "react-infinite-scroll-component";

function AnimeListPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  const { anime, loading, error, hasMore } = useAnimeList(
    page,
    10,
    debouncedSearch,
  );

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Anime List</h1>

      <div style={{ position: "relative", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search anime..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          style={{
            padding: "8px 36px 8px 8px",
            width: "100%",
          }}
        />

        {search && (
          <button
            onClick={() => {
              setSearch("");
              setPage(1);
            }}
            style={{
              position: "absolute",
              right: "8px",
              top: "50%",
              transform: "translateY(-50%)",
              border: "none",
              background: "transparent",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        )}
      </div>

      {!loading && anime.length === 0 ? (
        <p>Anime not found.</p>
      ) : (
        <InfiniteScroll
          dataLength={anime.length}
          next={() => {
            if (!loading) {
              setPage((prev) => prev + 1);
            }
          }}
          hasMore={hasMore}
          loader={<p>Loading...</p>}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "16px",
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
      )}
    </div>
  );
}

export default AnimeListPage;
