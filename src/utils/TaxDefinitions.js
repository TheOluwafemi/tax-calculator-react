export default {
  countryA: {
    employerTaxes: [
      { name: "Health Insurance", type: "direct", percentage: 10 },
      { name: "Social Security", type: "direct", percentage: 5 },
      {
        name: "Payroll Tax",
        type: "progressive",
        brackets: [
          { maxAmount: 50000, percentage: 10 },
          { maxAmount: Infinity, percentage: 30 },
        ],
      },
    ],

    employeeTaxes: [
      { name: "Social Security", type: "direct", percentage: 20 },
      {
        name: "Income Tax",
        type: "progressive",
        brackets: [
          { maxAmount: 25000, percentage: 20 },
          { maxAmount: Infinity, percentage: 40 },
        ],
      },
    ],
  },

  countryB: {
    employerTaxes: [
      { name: "Health Insurance", type: "direct", percentage: 21.5 },
      { name: "Social Security", type: "direct", percentage: 1.2 },
      {
        name: "Payroll Tax",
        type: "progressive",
        brackets: [
          { maxAmount: 10000, percentage: 5 },
          { maxAmount: 22000, percentage: 8 },
          { maxAmount: 60000, percentage: 12 },
          { maxAmount: Infinity, percentage: 15 },
        ],
      },
    ],

    employeeTaxes: [
      { name: "Social Security", type: "direct", percentage: 6.5 },
      {
        name: "Income Tax",
        type: "progressive",
        brackets: [
          { maxAmount: 25000, percentage: 5 },
          { maxAmount: 75000, percentage: 13 },
          { maxAmount: Infinity, percentage: 25 },
        ],
      },
    ],
  },
};
