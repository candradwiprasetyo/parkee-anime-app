import { useEffect, useState } from "react";
import { fetchAnimeDetail } from "../../../services/kitsuApi";

export const useAnimeDetail = (id) => {
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

    if (id) getDetail();
  }, [id]);

  return { anime, loading, error };
};
