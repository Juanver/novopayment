import { List } from "../../domain/list";

export const LIST_STUB: List[] = [
  {
    cardList: {
      name: "Lista de tarjetas",
      item: [],
    },
    paysTransfer: {
      name: "Transferencias y pagos",
      item: [
        {
          betweenCards: {
            name: "Entre tarjetas",
            item: [],
          },
          banks: {
            name: "Cuenta bancaria",
            item: [],
          },
          creditCard: {
            name: "Tarjetas de crédito",
            item: [],
          },
        },
      ],
    },
    support: {
      name: "Atención al cliente",
      item: [
        {
          lock: {
            name: "Bloqueos",
            item: [],
          },
          changePass: {
            name: "Cambio de contraseña",
            item: [],
          },
        },
      ],
    },
    enterprises: {
      name: "Empresas",
      item: [],
    },
  },
];
