import { yesInsurance, noInsurance } from './data';

const labels = {
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

export default labels;
