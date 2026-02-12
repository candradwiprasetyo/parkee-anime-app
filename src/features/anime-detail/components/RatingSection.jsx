function RatingSection({ ratingRank, popularityRank }) {
  return (
    <div style={{ margin: "20px 0" }}>
      <p>
        <strong>Rating Rank:</strong> #{ratingRank || "-"}
      </p>
      <p>
        <strong>Popularity Rank:</strong> #{popularityRank || "-"}
      </p>
    </div>
  );
}

export default RatingSection;
