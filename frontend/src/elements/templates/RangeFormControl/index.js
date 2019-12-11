import BaseTemplate from '../BaseTemplate'
import recipe from './rangeFormControlRecipe'

export default class RangeFormControlTemplate extends BaseTemplate {
  static register () {
    this.templateName = 'range-control-template'
    this.childrenElements = [ recipe ]
    this.templateElement = super.create()
    this.parentNode = document.querySelector('.form__fields')
    super.register()
  }

  static applyPreset ({
    rangeInputAttributes,
    nominalRangeValues: [ nominalMinValue, nominalMaxValue ]
  }) {
    const rangeFormControl = super.deepClone().firstChild
    const rangeInput = rangeFormControl.querySelector('input[type="range"]')
    const rangeValues = rangeFormControl.querySelector('.range__values')
    const [ minValue, maxValue ] = rangeValues.children

    for (const [name, value] of Object.entries(rangeInputAttributes)) {
      rangeInput.setAttribute(name, value)
    }

    minValue.textContent = nominalMinValue
    maxValue.textContent = nominalMaxValue

    return rangeFormControl
  }
}
