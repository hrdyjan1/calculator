export const yesInsurance = 'with';
export const noInsurance = 'without';

export const initialQuestionValues = [
  { value: yesInsurance, label: 'S pojištěním' },
  { value: noInsurance, label: 'Bez pojištění' },
];

export const initialForm = {
  money: 0,
  months: 0,
  insurance: yesInsurance,
};

export const initialFormMax = {
  money: 800,
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
  const insuranceIndex = insurance === yesInsurance ? 2 : 1;
  const response = await fetch(
    `http://api.mathjs.org/v4/?expr=${months || 0}*${money ||
      0}*${insuranceIndex}`
  );
  const answer = await response.json();
  return answer;
}
