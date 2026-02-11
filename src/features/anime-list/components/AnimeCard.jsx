import { Link } from "react-router-dom";

function AnimeCard({ anime }) {
  const attr = anime.attributes;

  return (
    <Link to={`/anime/${anime.id}`}>
      <div>
        <img src={attr.posterImage?.small} alt={attr.canonicalTitle} />
        <h3>{attr.titles?.en || attr.canonicalTitle}</h3>
        <p>{attr.titles?.ja_jp}</p>
      </div>
    </Link>
  );
}

export default AnimeCard;
