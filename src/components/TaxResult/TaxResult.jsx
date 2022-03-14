import "./TaxResult.css";

/* This components accepts the results from the 
calculated taxes and renders it in a table */

export default function TaxResult({ company, employee, income }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Company Taxes </th>
          <th> Employee Taxes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {Object.keys(company).map((tax, index) => {
              return (
                <p key={index}>
                  - {tax}: ${company[tax]}
                </p>
              );
            })}
          </td>
          <td>
            {Object.keys(employee).map((tax, index) => {
              return (
                <p key={index}>
                  - {tax}: ${employee[tax]}
                </p>
              );
            })}
          </td>
        </tr>
        <tr>
          <td>
            Total cost: Gross Salary + Sum of all employer taxes ($
            {(income + Object.values(company).reduce((a, b) => parseInt(a) + parseInt(b))).toFixed(
              2
            )}
            )
          </td>
          <td>
            Net Salary: Gross Salary - Sum of all employee taxes ($
            {(income - Object.values(employee).reduce((a, b) => parseInt(a) + parseInt(b))).toFixed(
              2
            )}
            )
          </td>
        </tr>
      </tbody>
    </table>
  );
}
