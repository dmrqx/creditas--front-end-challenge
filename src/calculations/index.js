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

export function convertRangeStepValueToNominalValue ({
  currentStep,
  nominalRangeValues,
  multiplier = 0.01
}) {
  const [minValue, maxValue] = nominalRangeValues
  const rangeDifference = maxValue - minValue
  const conversionFactor = rangeDifference * multiplier
  const nominalValue = currentStep * conversionFactor + minValue

  return nominalValue
}
