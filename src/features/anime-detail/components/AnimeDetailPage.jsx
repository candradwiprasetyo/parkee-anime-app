import { useParams } from "react-router-dom";
import { useAnimeDetail } from "../hooks/useAnimeDetail";
import AnimeDetailView from "./AnimeDetailView";
import BackButton from "./BackButton";
import EmptyState from "../../../components/ui/EmptyState";

function AnimeDetailPage() {
  const { id } = useParams();
  const { anime, loading, error } = useAnimeDetail(id);

  if (loading) return <p>Loading...</p>;
  if (error || !anime) {
    return <EmptyState message={error} />;
  }

  return (
    <div>
      <BackButton />
      <AnimeDetailView anime={anime} />
    </div>
  );
}

export default AnimeDetailPage;
