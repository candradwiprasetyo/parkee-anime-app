import { Card, Content } from "../AnimeCard/styles";
import { PosterSkeleton, Line } from "./styles";

function SkeletonLoader() {
  return (
    <Card>
      <PosterSkeleton />
      <Content>
        <Line style={{ width: "80%" }} />
        <Line style={{ width: "60%" }} />
      </Content>
    </Card>
  );
}

export default SkeletonLoader;
