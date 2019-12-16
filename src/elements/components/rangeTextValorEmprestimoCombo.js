import { rangeTextInputCombo } from '../markups/compoundElements'
import { collateralOptions } from '../../constants'

export default function rangeTextValorEmprestimoCombo () {
  return rangeTextInputCombo({
    inputName: 'valor-emprestimo',
    labelText: 'Valor do Empréstimo'
  })
}
