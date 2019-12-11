import RangeFormControl from '../../templates/RangeFormControl'
import convertStepToNominalValue from './convertStepToNominalValue'

export default function baseTenRangeFormControl ({
  inputName,
  nominalRangeValues
}) {
  const rangeFormControl = RangeFormControl.applyPreset({
    rangeInputAttributes: {
      id: inputName,
      name: inputName,
      step: '10',
      value: 0,
      'data-nominalvalue': Number(nominalRangeValues[0])
    },
    nominalRangeValues
  })

  const rangeInput = rangeFormControl.querySelector('input[type="range"]')

  rangeInput.addEventListener('change', function ({ target }) {
    const currentNominalValue = convertStepToNominalValue({
      currentStep: target.valueAsNumber,
      nominalRangeValues
    })

    target.setAttribute('data-nominalvalue', Number(currentNominalValue).toFixed(2))
  })

  return rangeFormControl
}
