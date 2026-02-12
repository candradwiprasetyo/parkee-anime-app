import { useState } from "react";
import { useAnimeList } from "../hooks/useAnimeList";
import { useDebounce } from "../hooks/useDebounce";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import AnimeGrid from "./AnimeGrid";
import EmptyState from "../../../components/ui/EmptyState";
import Header from "../../../components/layout/header";

function AnimeListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const search = searchParams.get("search") || "";
  const debouncedSearch = useDebounce(search, 500);

  const { anime, error, hasMore, loading } = useAnimeList(
    page,
    10,
    debouncedSearch,
  );

  if (error) return <EmptyState message={error} />;

  const isFirstLoading = loading && page === 1;
  const isEmpty = !loading && anime.length === 0;

  return (
    <>
      <Header />
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

      {isFirstLoading ? (
        <AnimeGrid anime={[]} loading />
      ) : isEmpty ? (
        <EmptyState message="Sorry we couldn’t find that anime. Try another spell" />
      ) : (
        <InfiniteScroll
          dataLength={anime.length}
          next={() => !loading && setPage((prev) => prev + 1)}
          hasMore={hasMore}
          loader={<p style={{ textAlign: "center" }}>Loading...</p>}
        >
          <AnimeGrid anime={anime} />
        </InfiniteScroll>
      )}
    </>
  );
}

export default AnimeListPage;
