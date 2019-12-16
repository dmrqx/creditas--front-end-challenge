import { baseLabel, baseSelect } from '../baseElements'
import { formFieldGroup } from '../customElements'

export default function selectInputCombo ([...selectInputsAttributes]) {
  const fields = selectInputsAttributes.map(
    ({ inputName, labelText, initialOptions }) =>
      [
        baseLabel({ htmlFor: inputName, textContent: labelText }),
        baseSelect({
          id: inputName,
          name: inputName,
          required: true,
          initialOptions
        })
      ].join('')
  )

  return formFieldGroup({ fields })
}
