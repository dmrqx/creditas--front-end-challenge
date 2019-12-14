import { loanRates } from '../constants'

export function calculateCollateralRange ({
  loanSizeRange,
  ltvRatio = loanRates.LOAN_TO_VALUE_RATIO
}) {
  return loanSizeRange.map(value => value * ltvRatio)
}

export function calculateMonthlyInterest ({ term }) {
  const { IOF, INTEREST_RATE } = loanRates

  return 1 + Number(IOF + INTEREST_RATE + term / 1000)
}

export function calculateMonthlyPayment ({ term, totalPayment }) {
  return totalPayment / term
}

export function calculateTotalPayment ({ loanAmount, monthlyInterest }) {
  return loanAmount * monthlyInterest
}

export function checkValueAgainstRange ({ range, value }) {
  const [min, max] = range

  return value <= max && value >= min
}
