import { useEffect, useState } from "react";
import { fetchAnimeList } from "../../../services/kitsuApi";

export const useAnimeList = (page = 1, limit = 10) => {
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const offset = (page - 1) * limit;

    const getAnime = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchAnimeList(limit, offset);

        if (data.data.length === 0) {
          setHasMore(false);
        } else {
          setAnime((prev) =>
            page === 1 ? data.data : [...prev, ...data.data],
          );
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getAnime();
  }, [page, limit]);

  return { anime, loading, error, hasMore };
};
