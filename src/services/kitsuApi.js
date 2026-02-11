const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchAnimeList = async (limit = 10, offset = 0) => {
  const response = await fetch(
    `${BASE_URL}/anime?page[limit]=${limit}&page[offset]=${offset}`,
  );

  if (!response.ok) {
    throw new Error("Gagal mengambil daftar anime");
  }

  return response.json();
};

export const fetchAnimeDetail = async (id) => {
  const response = await fetch(`${BASE_URL}/anime/${id}`);

  if (!response.ok) {
    throw new Error("Gagal mengambil detail anime");
  }

  return response.json();
};
