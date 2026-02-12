import { useParams } from "react-router-dom";
import { useAnimeDetail } from "../hooks/useAnimeDetail";
import AnimeDetailView from "./AnimeDetailView";
import EmptyState from "../../../components/ui/EmptyState";
import Loader from "../../../components/ui/Loader";

function AnimeDetailPage() {
  const { id } = useParams();
  const { anime, loading, error } = useAnimeDetail(id);

  if (loading) return <Loader />;
  if (error || !anime) {
    return <EmptyState message={error} />;
  }

  return (
    <>
      <AnimeDetailView anime={anime} />
    </>
  );
}

export default AnimeDetailPage;
