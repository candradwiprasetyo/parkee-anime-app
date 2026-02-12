import { useEffect, useState } from "react";
import { fetchAnimeList } from "../../../services/kitsuApi";

export const useAnimeList = (page = 1, limit = 10, search = "") => {
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const offset = (page - 1) * limit;

    const getAnime = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchAnimeList(limit, offset, search);

        if (page === 1) {
          setAnime(data.data);
        } else {
          setAnime((prev) => [...prev, ...data.data]);
        }

        setHasMore(data.data.length > 0);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getAnime();
  }, [page, limit, search]);

  return { anime, loading, error, hasMore };
};
