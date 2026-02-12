import { Link } from "react-router-dom";
import { Card, Poster, Content, Title, Subtitle } from "./styles";
import Badge from "../../../../components/ui/Badge";
import YearBadge from "../../../../components/ui/YearBadge";

function AnimeCard({ anime }) {
  const attr = anime.attributes;

  return (
    <Link
      to={`/anime/${anime.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Card>
        <Poster src={attr.posterImage?.small} alt={attr.canonicalTitle} />
        <Content>
          <Title>{attr.titles?.en || attr.canonicalTitle}</Title>
          <Subtitle>
            {attr.titles?.ja_jp} <YearBadge startDate={attr.startDate} />
          </Subtitle>
          {attr.averageRating && (
            <Badge value={Math.round(attr.averageRating)}>
              {Math.round(attr.averageRating)}%
            </Badge>
          )}
        </Content>
      </Card>
    </Link>
  );
}

export default AnimeCard;
