import { domSelectors } from '../../constants'
import { calculateCollateralRange } from '../../calculations'

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

export default function handleCollateralFormControlUpdate ({ loanSizeRange }) {
  const { rangeInput, rangeValues, textInput } = Object.entries(
    domSelectors.collateralValue
  )
    .filter(([key]) => key !== 'container')
    .reduce(
      (elements, [name, selector]) => ({
        ...elements,
        [name]: document.querySelector(selector)
      }),
      {}
    )

  // get converted range values
  const newRange = calculateCollateralRange({ loanSizeRange })

  // update range input
  const updatedAttributes = {
    min: newRange.minValue,
    max: newRange.maxValue,
    value: newRange.minValue,
    step: (newRange.maxValue - newRange.minValue) / 10 + newRange.minValue
  }
  updatedAttributes.forEach(([attribute, value]) =>
    rangeInput.setAttribute(attribute, value)
  )

  // update range display values
  const rangeValuesNodes = [...rangeValues.children]
  updateRangeDisplayValues({ newRange, rangeValuesNodes })

  // update text input
  textInput.value = newRange.minValue
}
