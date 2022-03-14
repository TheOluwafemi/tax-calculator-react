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
          { maxAmount: 25000, percentage: 10 },
          { maxAmount: Infinity, percentage: 30 },
        ],
      },
    ],
  },
  countryB: {
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
          { maxAmount: 25000, percentage: 10 },
          { maxAmount: Infinity, percentage: 30 },
        ],
      },
    ],
  },
};
