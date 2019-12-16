import { createElementFromMarkup } from '.'
import {
  parcelaGarantiaSelectCombo,
  rangeTextValorEmprestimoCombo,
  rangeTextValorGarantiaCombo
} from '../components'

export default function renderFieldsToForm ({ containerSelector }) {
  const formFieldsContainer = document.querySelector(containerSelector)
  const formFields = [
    parcelaGarantiaSelectCombo,
    rangeTextValorGarantiaCombo,
    rangeTextValorEmprestimoCombo
  ]
    .map(markupFn => ({ markup: markupFn() }))
    .map(createElementFromMarkup)

  for (const formField of formFields) {
    formFieldsContainer.appendChild(formField)
  }
}
