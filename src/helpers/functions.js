import { yesInsurance } from './data';

export async function getDataCalculator({ insurance, months, money }) {
  const insuranceIndex = insurance === yesInsurance ? 'true' : 'false';

  const { moneyPay } = await fetch(
    `https://calculator-insurance-server.herokuapp.com/api/insurance?money=${money}&months=${months}&insurance=${insuranceIndex}`,
    {
      method: 'GET',
      //   mode: 'cors', // no-cors, cors, *same-origin
    }
  )
    .then(response => response.json())
    .catch(error => {
      throw new Error(error);
    });

  return Math.round(moneyPay);
}
