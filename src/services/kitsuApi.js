const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchAnimeList = async (limit, offset, search = "") => {
  const params = new URLSearchParams({
    "page[limit]": limit,
    "page[offset]": offset,
  });

  if (search) {
    params.append("filter[text]", search);
  }

  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/anime?${params}`,
  );

  if (!response.ok) {
    throw new Error("Oops! The anime list took a day off");
  }

  return response.json();
};

export const fetchAnimeDetail = async (id) => {
  const response = await fetch(`${BASE_URL}/anime/${id}`);

  if (!response.ok) {
    throw new Error("Oops! We couldn’t summon the anime details");
  }

  return response.json();
};
