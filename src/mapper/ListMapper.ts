import { List, ListResponse } from "../domain/list";

export const ListMapper = (data: ListResponse[]): List[] => {
  return data.map(({ card_list, enterprises, pays_transfer, support }) => {
    return {
      cardList: {
        name: "Lista de tarjetas",
        item:
          card_list &&
          card_list.map(({ first_item, second_item }) => ({
            firstItem: first_item,
            secondItem: second_item,
          })),
      },
      paysTransfer: {
        name: "Transferencias y pagos",
        item: pays_transfer.map(({ between_cards, banks, credit_card }) => ({
          betweenCards: {
            name: "Entre tarjetas",
            item:
              between_cards &&
              between_cards.map(({ first_item, second_item }) => ({
                firstItem: first_item,
                secondItem: second_item,
              })),
          },
          banks: {
            name: "Cuenta bancaria",
            item:
              banks &&
              banks.map(({ first_item, second_item }) => ({
                firstItem: first_item,
                secondItem: second_item,
              })),
          },
          creditCard: {
            name: "Tarjetas de crédito",
            item:
              credit_card &&
              credit_card.map(({ first_item, second_item }) => ({
                firstItem: first_item,
                secondItem: second_item,
              })),
          },
        })),
      },
      support: {
        name: "Atención al cliente",
        item: support.map(({ lock, change_pass }) => ({
          lock: {
            name: "Bloqueos",
            item: lock.map(({ first_item, second_item }) => ({
              firstItem: first_item,
              secondItem: second_item,
            })),
          },
          changePass: {
            name: "Cambio de contraseña",
            item: change_pass.map(({ first_item, second_item }) => ({
              firstItem: first_item,
              secondItem: second_item,
            })),
          },
        })),
      },
      enterprises: {
        name: "Empresas",
        item:
          enterprises &&
          enterprises.map(({ first_item, second_item }) => ({
            firstItem: first_item,
            secondItem: second_item,
          })),
      },
    };
  });
};
