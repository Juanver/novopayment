import React, { useEffect, useState } from 'react';
import { List } from '../../domain/list';
import { getList } from '../../proxy/list';
import { StyledSubNavbar } from './SubNavbar.styled';


export const SubNavbar: React.FC = () => {
  const [lists, setLists] = useState<List[]>([])

  const getListReponse = async (): Promise<void> => {
    const listData = await getList();
    setLists(listData)
  }

  useEffect(() => {
    getListReponse();
  }, [])

  return (
    <>
      {
        lists && lists.map(({ cardList, enterprises, paysTransfer, support }, index) => (
          <StyledSubNavbar.ContainerSubNavbar key={index}>
            <StyledSubNavbar.ContainerTextSubNavbar>
              Lista de tarjetas
            </StyledSubNavbar.ContainerTextSubNavbar>
            <StyledSubNavbar.ContainerTextSubNavbar>
              Transferencias y pagos
            </StyledSubNavbar.ContainerTextSubNavbar>
            <StyledSubNavbar.ContainerTextSubNavbar>
              Atención al cliente
            </StyledSubNavbar.ContainerTextSubNavbar>
            <StyledSubNavbar.ContainerTextSubNavbar>
              Empresas
            </StyledSubNavbar.ContainerTextSubNavbar>
          </StyledSubNavbar.ContainerSubNavbar>
        ))
      }
    </>
  )
}
