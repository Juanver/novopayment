import React from 'react'
import { StyledNavbar } from './Navbar.styled';
import PrutecImage from '../../assets/TuPruTec.svg'
import ArrowDown from '../../assets/ArrowDown.svg'

export const Navbar: React.FC = () => {
  return (
    <StyledNavbar.ContainerNavbar>
      <img src={PrutecImage} alt="Tu Prutect logo"/>
      <StyledNavbar.ContainerUserName>
        <p>USER NAME</p>
        <img src={ArrowDown} alt="Arrow down"/>
      </StyledNavbar.ContainerUserName>
    </StyledNavbar.ContainerNavbar>
  )
}
