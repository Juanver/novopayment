import styled, { css } from "styled-components";
import { Palette } from "../../assets/palette/Palette";
import { Spacing } from "../../assets/spacing/Spacing";

const ContainerSubNavbar = styled.div`
  display: flex;
  gap: ${Spacing.Spacing3};
  padding: ${Spacing.Spacing0} ${Spacing.Spacing4};
  border-bottom: 1px solid ${Palette.BrandGray200};
  box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.6);
`;

const ContainerTextSubNavbar = styled.div`
  padding: ${Spacing.Spacing0} ${Spacing.Spacing1};
`;

const TextSubNavbar = styled.p`
  position: relative;
  padding: ${Spacing.Spacing1} ${Spacing.Spacing0};
  margin: ${Spacing.Spacing0};
`;

const ContainerSubList = styled.div`
  background-color: white;
  border: 1px solid ${Palette.BrandGray300};
  border-radius: 2px;
  position: absolute;

  p {
    border-bottom: 1px solid ${Palette.BrandGray300};
    margin: ${Spacing.Spacing0};
    padding: ${Spacing.Spacing1};
  }
`;

export const StyledSubNavbar = {
  ContainerSubNavbar,
  ContainerTextSubNavbar,
  TextSubNavbar,
  ContainerSubList,
};
