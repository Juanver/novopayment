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
  betweenCards: Item[];
  banks: Item[];
  creditCard: Item[];
}

interface SupportResponse {
  lock: ItemResponse[];
  change_pass: ItemResponse[];
}

interface Support {
  lock: Item[];
  changePass: Item[];
}

export interface ListResponse {
  card_list: ItemResponse[];
  pays_transfer: PaysTransferResponse[];
  support: SupportResponse[];
  enterprises: ItemResponse[];
}

export interface List {
  cardList: Item[];
  paysTransfer: PaysTransfer[];
  support: Support[];
  enterprises: Item[];
}
