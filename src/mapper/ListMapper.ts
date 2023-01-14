import { List, ListResponse } from "../domain/list";

export const ListMapper = (data: ListResponse[]): List[] => {
  return data.map(({ card_list, enterprises, pays_transfer, support }) => {
    return {
      cardList:
        card_list &&
        card_list.map(({ first_item, second_item }) => ({
          firstItem: first_item,
          secondItem: second_item,
        })),
      paysTransfer: pays_transfer.map(
        ({ between_cards, banks, credit_card }) => ({
          betweenCards:
            between_cards &&
            between_cards.map(({ first_item, second_item }) => ({
              firstItem: first_item,
              secondItem: second_item,
            })),
          banks:
            banks &&
            banks.map(({ first_item, second_item }) => ({
              firstItem: first_item,
              secondItem: second_item,
            })),
          creditCard:
            credit_card &&
            credit_card.map(({ first_item, second_item }) => ({
              firstItem: first_item,
              secondItem: second_item,
            })),
        })
      ),
      support: support.map(({ lock, change_pass }) => ({
        lock: lock.map(({ first_item, second_item }) => ({
          firstItem: first_item,
          secondItem: second_item,
        })),
        changePass: change_pass.map(({ first_item, second_item }) => ({
          firstItem: first_item,
          secondItem: second_item,
        })),
      })),
      enterprises:
        enterprises &&
        enterprises.map(({ first_item, second_item }) => ({
          firstItem: first_item,
          secondItem: second_item,
        })),
    };
  });
};
