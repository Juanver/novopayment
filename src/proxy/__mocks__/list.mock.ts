import { ListResponse } from "../../domain/list";

export const LIST_MOCK: ListResponse[] = [
  {
    card_list: [],
    pays_transfer: [
      {
        between_cards: [],
        banks: [],
        credit_card: [],
      },
    ],
    support: [
      {
        lock: [],
        change_pass: [],
      },
    ],
    enterprises: [],
  },
];
