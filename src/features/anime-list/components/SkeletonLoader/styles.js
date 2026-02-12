import styled, { keyframes } from "styled-components";

export const shimmer = keyframes`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

export const SkeletonBlock = styled.div`
  background: linear-gradient(90deg, #eeeeee 25%, #dddddd 37%, #eeeeee 63%);
  background-size: 800px 100%;
  animation: ${shimmer} 1.4s infinite;
  border-radius: 4px;
`;

export const PosterSkeleton = styled(SkeletonBlock)`
  width: 100%;
  aspect-ratio: 261 / 372;
  object-fit: cover;
`;

export const Line = styled(SkeletonBlock)`
  height: 16px;
  margin-bottom: 8px;
  margin-left: auto;
  margin-right: auto;
`;
