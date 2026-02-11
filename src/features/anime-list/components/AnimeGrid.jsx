import AnimeCard from "./AnimeCard";

function AnimeGrid({ anime }) {
  return (
    <div>
      {anime.map((item) => (
        <AnimeCard key={item.id} anime={item} />
      ))}
    </div>
  );
}

export default AnimeGrid;
