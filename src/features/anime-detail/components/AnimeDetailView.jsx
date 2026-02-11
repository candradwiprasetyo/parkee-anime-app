function AnimeDetailView({ anime }) {
  const attr = anime.attributes;

  return (
    <div>
      <img src={attr.posterImage?.medium} alt={attr.canonicalTitle} />

      <div>
        <h1>{attr.titles?.en || attr.canonicalTitle}</h1>
        <h2>{attr.titles?.ja_jp}</h2>

        <p>
          <strong>Rating:</strong> {attr.averageRating}
        </p>

        <p>{attr.synopsis}</p>
      </div>
    </div>
  );
}

export default AnimeDetailView;
