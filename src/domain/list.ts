interface ItemResponse {
  first_item: string;
  second_item: string;
}

interface Item {
  firstItem: string;
  secondItem: string;
}

interface PaysTransferResponse {
  between_cards: ItemResponse[];
  banks: ItemResponse[];
  credit_card: ItemResponse[];
}

interface PaysTransfer {
  betweenCards: ItemList;
  banks: ItemList;
  creditCard: ItemList;
}

interface SupportResponse {
  lock: ItemResponse[];
  change_pass: ItemResponse[];
}

interface Support {
  lock: ItemList;
  changePass: ItemList;
}

export interface ListResponse {
  card_list: ItemResponse[];
  pays_transfer: PaysTransferResponse[];
  support: SupportResponse[];
  enterprises: ItemResponse[];
}

interface ItemList {
  name: string;
  item: Item[];
}

interface PaysTranferList {
  name: string;
  item: PaysTransfer[];
}

interface SupportList {
  name: string;
  item: Support[];
}

export interface List {
  cardList: ItemList;
  paysTransfer: PaysTranferList;
  support: SupportList;
  enterprises: ItemList;
}
