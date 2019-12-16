import { domSelectors } from '../../constants'
import {
  calculateCollateralRange,
  convertRangeStepValueToNominalValue
} from '../../calculations'
import { getLoanFeaturesByCollateralType } from './helpers'

export default function onRangeValueChange ({ target }) {
  const { collateralTypeSelect, collateralValue, loanAmount } = domSelectors
  const currentCollateralType = document.querySelector(collateralTypeSelect)
    .value
  const { sizeRange: currentLoanSizeRange } = getLoanFeaturesByCollateralType({
    type: currentCollateralType
  })

  const [rangeInputName, currentStep] = [target.name, target.value]

  if (collateralValue.rangeInput.includes(rangeInputName)) {
    const textInputElement = document.querySelector(collateralValue.textInput)
    textInputElement.value = convertRangeStepValueToNominalValue({
      currentStep,
      nominalRangeValues: calculateCollateralRange({
        loanSizeRange: currentLoanSizeRange
      })
    })
  }

  if (loanAmount.rangeInput.includes(rangeInputName)) {
    const textInputElement = document.querySelector(loanAmount.textInput)
    textInputElement.value = convertRangeStepValueToNominalValue({
      currentStep,
      nominalRangeValues: currentLoanSizeRange
    })
  }
}
