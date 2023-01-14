import styled from "styled-components";
import { Palette } from "./assets/palette/Palette";
import bgContent from "./assets/bg-content.jpg"

const ContainerApp = styled.div``;

const ContentApp = styled.div`
  background-image: url(${bgContent});
  background-repeat: repeat-x;
  height: calc(100vh - 200px);
`;

export const StyledApp = {
  ContainerApp,
  ContentApp,
};
