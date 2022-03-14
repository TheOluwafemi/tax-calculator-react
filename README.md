# Tax-Calculator

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/)

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Compile and Minify for Production

```sh
yarn build
```

### How the app works 
This app takes a `Country` input, and an `Income` input in a form, then uses that to compute the taxes for that particular country and candidate. 

### How to add a new country

Look for `TaxDefinitions` file in the `utils` folder (`src/utils`). Then add a new country with the specified data for that country. The Data for every country should be in a specific format, see sample below. This data contains tax details for the employer and the employee and this is used to compute the eventual tax figures

```
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
```