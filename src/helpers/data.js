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

// Slider - Money
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

// Slider - Months
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

export const labels = {
  money: {
    heading: 'Kolik si chcete půjčit',
    value: 'Kč',
  },
  months: {
    heading: 'Na jak dlouho',
    value: 'Měsíců',
  },
  insurance: {
    heading: 'Pojištění proti neschopnosti půjčku splácet',
    values: [
      { value: yesInsurance, label: 'S pojištěním' },
      { value: noInsurance, label: 'Bez pojištění' },
    ],
  },
};
