export default function convertStepToNominalValue ({ currentStep, nominalRangeValues, multiplier = 0.01 }) {
  const [ minValue, maxValue ] = nominalRangeValues
  const rangeDifference = maxValue - minValue
  const conversionFactor = rangeDifference * multiplier
  const nominalValue = currentStep * conversionFactor + minValue

  return nominalValue
}
