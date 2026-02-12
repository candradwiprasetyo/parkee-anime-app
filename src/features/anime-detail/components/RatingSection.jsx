import { formatDate } from "../../../utils/formatDate";

function RatingSection({ ratingRank, popularityRank, startDate, endDate }) {
  return (
    <div style={{ margin: "20px 0" }}>
      <p>
        <strong>Rating Rank:</strong> #{ratingRank || "-"}
      </p>
      <p>
        <strong>Popularity Rank:</strong> #{popularityRank || "-"}
      </p>
      <p>
        <strong>Date:</strong> {formatDate(startDate)} -{" "}
        {endDate ? formatDate(endDate) : "Ongoing"}
      </p>
    </div>
  );
}

export default RatingSection;
