import styled, { css } from "styled-components";
import { Spacing } from "../../assets/spacing/Spacing";

const ContainerSubNavbar = styled.div`
  display: flex;
  gap: ${Spacing.Spacing3};
  padding: ${Spacing.Spacing0} ${Spacing.Spacing4};
`;

const ContainerTextSubNavbar = styled.div`
  padding: ${Spacing.Spacing1};
`;

const TextSubNavbar = styled.p`
  margin: ${Spacing.Spacing0};
`;

export const StyledSubNavbar = {
  ContainerSubNavbar,
  ContainerTextSubNavbar,
  TextSubNavbar,
};
