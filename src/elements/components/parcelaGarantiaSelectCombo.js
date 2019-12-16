import { selectInputCombo } from '../markups/compoundElements'
import { collateralOptions } from '../../constants'

export default function parcelaGarantiaSelectCombo () {
  const selectInputsAttributes = [
    {
      inputName: 'parcelas',
      labelText: 'Número de parcelas'
    },
    {
      inputName: 'garantia',
      labelText: 'Garantia',
      initialOptions: collateralOptions.map(({ type, nicename }) => ({
        textContent: nicename,
        value: type
      }))
    }
  ]

  return selectInputCombo(selectInputsAttributes)
}
