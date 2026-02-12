import { Container, Left, Right, Poster, ContentWrapper } from "./styles";
import Button from "../../../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import TitleSection from "../TitleSection";
import RatingSection from "../RatingSection";
import SynopsisSection from "../SynopsisSection";
import Badge from "../../../../components/ui/Badge";
import WaveIcon from "../../../../components/icons/WaveIcon";
import CircleIcon from "../../../../components/icons/CircleIcon";

function AnimeDetailView({ anime }) {
  const attr = anime.attributes;
  const navigate = useNavigate();

  return (
    <Container>
      <Left>
        <Poster src={attr.posterImage?.large} alt={attr.canonicalTitle} />
        <Badge value={Math.round(attr.averageRating)}>
          {Math.round(attr.averageRating)}%
        </Badge>
      </Left>

      <Right>
        <ContentWrapper>
          <TitleSection titles={attr.titles} />

          <RatingSection
            ratingRank={attr.ratingRank}
            popularityRank={attr.popularityRank}
            startDate={attr.startDate}
            endDate={attr.endDate}
          />

          <SynopsisSection synopsis={attr.synopsis} />

          <div style={{ marginTop: "40px" }}>
            <Button onClick={() => navigate(-1)}>Back</Button>
          </div>
        </ContentWrapper>
        <WaveIcon />
        <CircleIcon />
      </Right>
    </Container>
  );
}

export default AnimeDetailView;
