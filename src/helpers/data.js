export const yesInsurance = 'with';
export const noInsurance = 'without';

export const initialForm = {
  money: 20000,
  months: 24,
  insurance: yesInsurance,
};

export const initialFormMax = {
  money: 800000,
  months: 96,
};

export const moneyMarks = [
  {
    value: initialForm.money,
    label: `${initialForm.money} Kč`,
  },
  {
    value: initialFormMax.money,
    label: `${initialFormMax.money} Kč`,
  },
];
export const monthsMarks = [
  {
    value: initialForm.months,
    label: `${initialForm.months} Měsíců`,
  },
  {
    value: initialFormMax.months,
    label: `${initialFormMax.months} Měsíců`,
  },
];

export const initialData = {
  isLoading: false,
  isError: false,
  data: {
    moneyPay: 0,
  },
};

export const formActions = {
  START: 'START',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
  RESET: 'RESET',
};

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
    .catch(error => console.error('Error:', error));

  return Math.round(moneyPay);
}
