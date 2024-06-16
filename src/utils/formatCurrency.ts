type CurrencyType = 'BRL' | 'USD';

const formatCurrency = (value: number, currency: CurrencyType) => {
  return value.toLocaleString('pt-br', { style: 'currency', currency });
};

export default formatCurrency;
