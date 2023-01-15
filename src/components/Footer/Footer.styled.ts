import styled from "styled-components";
import { Palette } from "../../assets/palette/Palette";
import { Spacing } from "../../assets/spacing/Spacing";

const ContainerFooter = styled.div`
  background-color: ${Palette.BrandBlue};
  color: white;
  display: flex;
  justify-content: space-evenly;
  padding: ${Spacing.Spacing5} ${Spacing.Spacing2};
  border-top: 3px solid ${Palette.BrandBlueLight};
  img {
    width: 80px;
  }
`;

const ContainerCopyright = styled.p`
  magin-bottom: ${Spacing.Spacing0};
`;

export const StyledFooter = {
  ContainerFooter,
  ContainerCopyright,
};
