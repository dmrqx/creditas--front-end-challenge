import { domSelectors } from '../../constants'
import { calculateCollateralRange } from '../../calculations'
import { replaceSelectOptions } from '../../actions'
import { getLoanFeaturesByCollateralType } from './helpers'

function updateRangeDisplayValues ({
  newRange: [minValue, maxValue],
  rangeValuesNodes: [minValueNode, maxValueNode]
}) {
  minValueNode.textContent = minValue
  maxValueNode.textContent = maxValue
}

function updateCollateralRangeValues ({ loanSizeRange }) {
  const rangeValuesContainer = domSelectors.collateralValue.rangeValues

  updateRangeDisplayValues({
    newRange: calculateCollateralRange({ loanSizeRange }),
    rangeValuesNodes: document.querySelector(rangeValuesContainer).children
  })
}

function updateLoanSizeRangeValues ({ loanSizeRange: [minLoanAmountValue] }) {
  const rangeValuesContainer = domSelectors.loanAmount.rangeValues
  const { value: currentCollateralValue } = document.querySelector(
    domSelectors.collateralValue.textInput
  )
  const maxLoanAmountValue = currentCollateralValue / 1.25

  updateRangeDisplayValues({
    newRange: [minLoanAmountValue, maxLoanAmountValue],
    rangeValuesNodes: document.querySelector(rangeValuesContainer).children
  })
}

export default function onCollateralTypeChange (event) {
  const {
    sizeRange: currentLoanSizeRange,
    terms
  } = getLoanFeaturesByCollateralType({ type: event.target.value })

  replaceSelectOptions({
    selectElement: document.querySelector(domSelectors.loanTermSelect),
    options: terms.map(term => `${term}`)
  })
  updateCollateralRangeValues({ loanSizeRange: currentLoanSizeRange })
  updateLoanSizeRangeValues({ loanSizeRange: currentLoanSizeRange })
}
