import styled, { css } from "styled-components";
import { Palette } from "../../assets/palette/Palette";
import { Spacing } from "../../assets/spacing/Spacing";

const ContainerSubNavbar = styled.div`
  display: flex;
  gap: ${Spacing.Spacing3};
  padding: ${Spacing.Spacing0} ${Spacing.Spacing4};
  border-bottom: 2px solid ${Palette.BrandGray300};
`;

const ContainerTextSubNavbar = styled.div`
  cursor: pointer;
  padding: ${Spacing.Spacing0} ${Spacing.Spacing1};
  transition: border-bottom 0.3s ease-in-out;
  position: relative;
  
  &::after {
    transition: opacity 0.2s ease-out;
    background-color: ${Palette.BrandBlue};
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    opacity: 0;
    content: "";
  }
  &:hover:after {
    background-color: ${Palette.BrandBlue};
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    opacity: 1;
    content: "";
  }
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
  box-shadow: 0px 5px 20px -7px rgba(0,0,0,0.75);
  position: absolute;
  left: 0;
  right: 0;

  p {
    border-bottom: 1px solid ${Palette.BrandGray300};
    margin: ${Spacing.Spacing0};
    padding: ${Spacing.Spacing1};

    &:last-child{
      border-bottom: none;
    }
  }
`;

export const StyledSubNavbar = {
  ContainerSubNavbar,
  ContainerTextSubNavbar,
  TextSubNavbar,
  ContainerSubList,
};
