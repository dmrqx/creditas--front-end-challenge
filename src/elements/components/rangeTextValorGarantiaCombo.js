import { rangeTextInputCombo } from '../markups/compoundElements'
import { collateralOptions } from '../../constants'

export default function rangeTextValorGarantiaCombo () {
  console.log(collateralOptions)

  return rangeTextInputCombo({
    inputName: 'valor-garantia',
    labelText: 'Valor da Garantia'
  })
}
