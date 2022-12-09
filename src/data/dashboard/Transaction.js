export const Transaction = [
  {
    id:1,
    invoiceNumber: "10192837",
    userId: 1,
    date: "22 April 2022",
    total: "600000",
    status: "On Process",
    items: [
      {
        itemId: 2,
        quantity: 1
      },
      {
        itemId: 4,
        quantity: 2
      },
    ],
  },
  {
    id:2,
    invoiceNumber: "10192838",
    userId: 1,
    date: "22 April 2022",
    total: "400000",
    status: "On Shipping",
    items: [
      {
        itemId: 2,
        quantity: 1
      },
      {
        itemId: 4,
        quantity: 2
      },
    ],
  },
  {
    id:3,
    invoiceNumber: "10192839",
    userId: 2,
    date: "22 April 2022",
    total: "400000",
    status: "Arrived",
    items: [
      {
        itemId: 2,
        quantity: 1
      },
      {
        itemId: 4,
        quantity: 2
      },
    ],
  },
];