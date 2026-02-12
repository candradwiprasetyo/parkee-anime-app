import { Title } from "./styles";

function TitleSection({ titles }) {
  return (
    <div>
      <Title>{titles?.en || titles?.en_jp}</Title>
      {titles?.ja_jp && <h3>{titles.ja_jp}</h3>}
    </div>
  );
}

export default TitleSection;
