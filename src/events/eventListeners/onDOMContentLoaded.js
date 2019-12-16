/* global Event */
import { collateralOptions } from '../../constants'

export default function onDOMContentLoaded ({ defaultOnLoadOption } = {}) {
  const event = new Event('change')
  const selectElement = document.querySelector('select[name="garantia"]')
  const initialSelectedOption = (
    collateralOptions.find(({ type }) => type === defaultOnLoadOption) ||
    collateralOptions[0]
  ).type

  selectElement.value = initialSelectedOption
  selectElement.dispatchEvent(event)
}
