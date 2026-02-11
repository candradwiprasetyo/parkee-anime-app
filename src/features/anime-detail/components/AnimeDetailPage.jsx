import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchAnimeDetail } from "../../../services/kitsuApi";

function AnimeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      try {
        setLoading(true);
        const data = await fetchAnimeDetail(id);
        setAnime(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getDetail();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!anime) return null;

  const attr = anime.attributes;

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => navigate(-1)}>← Back</button>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <img src={attr.posterImage?.medium} alt={attr.canonicalTitle} />

        <div>
          <h1>{attr.titles?.en || attr.canonicalTitle}</h1>
          <h2>{attr.titles?.ja_jp}</h2>

          <p>
            <strong>Rating:</strong> {attr.averageRating}
          </p>

          <p style={{ marginTop: "20px" }}>{attr.synopsis}</p>
        </div>
      </div>
    </div>
  );
}

export default AnimeDetailPage;
