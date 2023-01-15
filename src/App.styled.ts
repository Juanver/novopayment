import styled from "styled-components";
import bgContent from "./assets/bg-content.jpg";

const ContainerApp = styled.div``;

const ContentApp = styled.div`
  background-image: url(${bgContent});
  background-repeat: repeat-x;
  height: calc(100vh - 203px);
`;

export const StyledApp = {
  ContainerApp,
  ContentApp,
};
