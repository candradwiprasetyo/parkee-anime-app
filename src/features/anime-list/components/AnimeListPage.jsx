import { useState } from "react";
import { useAnimeList } from "../hooks/useAnimeList";
import { useDebounce } from "../hooks/useDebounce";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link, useSearchParams } from "react-router-dom";

function AnimeListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const search = searchParams.get("search") || "";

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
            setSearchParams(e.target.value ? { search: e.target.value } : {});
            setPage(1);
          }}
          style={{ marginBottom: "20px", padding: "8px", width: "100%" }}
        />

        {search && (
          <button
            onClick={() => {
              setSearchParams({});
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
              <Link
                to={`/anime/${item.id}`}
                key={item.id}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div>
                  <img
                    src={item.attributes.posterImage?.small}
                    alt={item.attributes.canonicalTitle}
                  />
                  <h3>
                    {item.attributes.titles?.en ||
                      item.attributes.canonicalTitle}
                  </h3>
                  <p>{item.attributes.titles?.ja_jp}</p>
                </div>
              </Link>
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
}

export default AnimeListPage;
