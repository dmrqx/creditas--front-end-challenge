/* global alert, confirm */

import './styles.css'
import { calculateMonthlyInterest, calculateTotalPayment } from './calculations'
import { renderFieldsToForm } from './elements/helpers'

export const checkFormValidity = formElement => formElement.checkValidity()

export const getFormValues = formElement =>
  Object.values(formElement.elements)
    .filter(element => ['SELECT', 'INPUT'].includes(element.nodeName))
    .map(element => ({
      field: element.name,
      value: element.value
    }))

export const toStringFormValues = values => {
  const match = matchString => value => value.field === matchString

  const term = values.find(match('parcelas')).value
  const loanAmount = values.find(match('valor-emprestimo')).value

  const monthlyInterest = calculateMonthlyInterest({ term })
  const totalPayment = calculateTotalPayment({ loanAmount, monthlyInterest })

  return `Confirmação\n${values
    .map(value => `Campo: ${value.field}, Valor: ${value.value}`)
    .join('\n')}`.concat(`\nTotal ${totalPayment}`)
}

export function Send (values) {
  return new Promise((resolve, reject) => {
    try {
      resolve(toStringFormValues(values))
    } catch (error) {
      reject(error)
    }
  })
}

export function Submit (formElement) {
  formElement.addEventListener('submit', function (event) {
    event.preventDefault()
    if (checkFormValidity(formElement)) {
      Send(getFormValues(formElement))
        .then(result => confirm(result, 'Your form submited success'))
        .catch(error => alert('Your form submited error', error))
    }
  })
}

export default class CreditasChallenge {
  static initialize () {
    renderFieldsToForm({ containerSelector: '.form__fields' })
    this.registerEvents()
  }

  static registerEvents () {
    Submit(document.querySelector('.form'))
  }
}

document.addEventListener('DOMContentLoaded', function () {
  CreditasChallenge.initialize()
  // onDOMContentLoaded({ defaultOnLoadOption: 'veiculo' })
})
