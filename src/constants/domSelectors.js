export default {
  collateralTypeSelect: 'select[name="garantia"]',
  collateralValue: {
    container: '.valor-garantia',
    rangeInput: 'input[name="valor-garantia-range"]',
    rangeValues: '.valor-garantia .range__values',
    textInput: 'input[name="valor-garantia"]'
  },
  loanAmount: {
    container: '.valor-emprestimo',
    rangeInput: 'input[name="valor-emprestimo-range"]',
    rangeValues: '.valor-emprestimo .range__values',
    textInput: 'input[name="valor-emprestimo"]'
  },
  loanTermSelect: 'select[name="parcelas"]',
  simulationResults: {
    monthlyInterests: '.tax_container p',
    monthlyPayment: '.quota span',
    totalWithInterests: '.amount_container p'
  }
}
