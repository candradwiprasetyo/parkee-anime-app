import { Container, Title, Logo } from "./styles";
import LineIcon from "../../icons/LineIcon";
import StarIcon from "../../icons/StarIcon";

function Header() {
  return (
    <Container>
      <Title>
        <Logo>Parkee</Logo> Anime App
      </Title>
      <LineIcon />
      <StarIcon />
    </Container>
  );
}

export default Header;
