import React from 'react'
import { StyledFooter } from './Footer.styled';
import Isotipo from '../../assets/Isotipo.svg';

export const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();
  const companyName = 'Novopayment Inc.';

  return (
    <StyledFooter.ContainerFooter>
      <img src={Isotipo} alt='Isotipo' />
      <StyledFooter.ContainerCopyright>
        <small>&copy;{` ${year} `}<span>{companyName} All rights reserved</span></small>
      </StyledFooter.ContainerCopyright>
      <img src={Isotipo} alt='Isotipo' />
    </StyledFooter.ContainerFooter>
  )
}
