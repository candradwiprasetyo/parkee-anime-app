import { useEffect, useState } from "react";
import { fetchAnimeList } from "../../../services/kitsuApi";

export const useAnimeList = (page = 1, limit = 10) => {
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const offset = (page - 1) * limit;

    const getAnime = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchAnimeList(limit, offset);
        setAnime(data.data);
      } catch (err) {
        setError(`Failed to load anime: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    getAnime();
  }, [page, limit]);

  return { anime, loading, error };
};
