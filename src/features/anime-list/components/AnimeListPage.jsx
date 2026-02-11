import { useState } from "react";
import { useAnimeList } from "../hooks/useAnimeList";
import { useDebounce } from "../hooks/useDebounce";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import AnimeGrid from "./AnimeGrid";
import EmptyState from "../../../components/ui/EmptyState";

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
    <>
      <h1>Anime List</h1>

      <SearchBar
        value={search}
        onChange={(value) => {
          setSearchParams(value ? { search: value } : {});
          setPage(1);
        }}
        onClear={() => {
          setSearchParams({});
          setPage(1);
        }}
      />

      {!loading && anime.length === 0 ? (
        <EmptyState message="Anime not found." />
      ) : (
        <InfiniteScroll
          dataLength={anime.length}
          next={() => !loading && setPage((prev) => prev + 1)}
          hasMore={hasMore}
          loader={<p>Loading...</p>}
        >
          <AnimeGrid anime={anime} />
        </InfiniteScroll>
      )}
    </>
  );
}

export default AnimeListPage;
