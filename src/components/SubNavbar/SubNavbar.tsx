import React, { useEffect, useState } from 'react';
import { List } from '../../domain/list';
import { getList } from '../../proxy/list';
import { StyledSubNavbar } from './SubNavbar.styled';


export const SubNavbar: React.FC = () => {
  const [lists, setLists] = useState<List[]>([])
  const [hasSublistPays, setHasSublistPays] = useState(false)
  const [hasSublistSupport, setHasSublistSupport] = useState(false)

  const getListReponse = async (): Promise<void> => {
    const listData = await getList();
    setLists(listData)
  }

  useEffect(() => {
    getListReponse();
  }, []);

  return (
    <>
      {
        lists && lists.map(({ cardList, paysTransfer, support, enterprises }, index) => (
          <StyledSubNavbar.ContainerSubNavbar key={index}>
            <StyledSubNavbar.ContainerTextSubNavbar>
              <StyledSubNavbar.TextSubNavbar>
                {cardList.name}
              </StyledSubNavbar.TextSubNavbar>
            </StyledSubNavbar.ContainerTextSubNavbar>
            <StyledSubNavbar.ContainerTextSubNavbar onMouseEnter={() => { setHasSublistPays(true) }} onMouseLeave={() => { setHasSublistPays(false) }}>
              <StyledSubNavbar.TextSubNavbar>
                {paysTransfer.name}
              </StyledSubNavbar.TextSubNavbar>
              {
                paysTransfer.item && hasSublistPays && (
                  paysTransfer.item.map(({ banks, betweenCards, creditCard }) => (
                    <StyledSubNavbar.ContainerSubList>
                      <p>{banks.name}</p>
                      <p>{betweenCards.name}</p>
                      <p>{creditCard.name}</p>
                    </StyledSubNavbar.ContainerSubList>
                  ))
                )
              }
            </StyledSubNavbar.ContainerTextSubNavbar>
            <StyledSubNavbar.ContainerTextSubNavbar onMouseEnter={() => { setHasSublistSupport(true) }} onMouseLeave={() => { setHasSublistSupport(false) }}>
              <StyledSubNavbar.TextSubNavbar>
                {support.name}
              </StyledSubNavbar.TextSubNavbar>
              {
                support.item && hasSublistSupport && (
                  support.item.map(({ lock, changePass }) => (
                    <StyledSubNavbar.ContainerSubList>
                      <p>{lock.name}</p>
                      <p>{changePass.name}</p>
                    </StyledSubNavbar.ContainerSubList>
                  ))
                )
              }
            </StyledSubNavbar.ContainerTextSubNavbar>
            <StyledSubNavbar.ContainerTextSubNavbar>
              <StyledSubNavbar.TextSubNavbar>
                {enterprises.name}
              </StyledSubNavbar.TextSubNavbar>
            </StyledSubNavbar.ContainerTextSubNavbar>
          </StyledSubNavbar.ContainerSubNavbar>
        ))
      }
    </>
  )
}
