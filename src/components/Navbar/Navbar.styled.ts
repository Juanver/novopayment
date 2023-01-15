import styled from "styled-components";
import { Palette } from "../../assets/palette/Palette";
import { Spacing } from "../../assets/spacing/Spacing";

const ContainerNavbar = styled.div`
  background-color: ${Palette.BrandBlue};
  color: white;
  display: flex;
  justify-content: space-between;
  padding: ${Spacing.Spacing1} ${Spacing.Spacing2};
`;
const ContainerUserName = styled.div`
  display: flex;
  gap: ${Spacing.Spacing3};

  img {
    width: ${Spacing.Spacing2}
  }
`;

export const StyledNavbar = {
  ContainerNavbar,
  ContainerUserName,
};