export const yesInsurance = 'with';
export const noInsurance = 'without';

export const initialForm = {
  money: 0,
  months: 0,
  insurance: yesInsurance,
};

export const initialData = {
  moneyPay: 0,
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
