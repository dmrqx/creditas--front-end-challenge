import { baseInput, baseLabel } from '../baseElements'
import { formFieldGroup, rangeDisplayValue } from '../customElements'

export default function rangeTextInputCombo ({
  inputName,
  labelText,
  rangeValues = []
}) {
  const textInputField = [
    baseLabel({ htmlFor: inputName, textContent: labelText }),
    baseInput({ id: inputName, name: inputName, required: true, type: 'text' })
  ].join('')
  const rangeInputField = [
    baseInput({
      id: `${inputName}-range`,
      name: `${inputName}-range`,
      type: 'range'
    }),
    rangeDisplayValue({ rangeValues })
  ].join('')

  return formFieldGroup({
    fields: [textInputField, `<div class="range">${rangeInputField}</div>`]
  })
}
