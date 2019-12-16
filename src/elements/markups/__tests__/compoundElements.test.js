import { formField, formFieldGroup, rangeDisplayValue } from '../customElements'

describe('Markup: customElements', () => {
  describe('formField', () => {
    const fieldContent =
      '<input id="range-input" name="range-input-name" step="42" type="range" />'

    it('should return given field html markup nested inside container div with default class name', () => {
      const fieldString = formField({ content: fieldContent })
      const markup = '<div class="field">' + fieldContent + '</div>'

      expect(fieldString).toEqual(markup)
    })

    it('should return given field html markup nested inside container div with given class name', () => {
      const fieldString = formField({
        containerClass: 'some-class',
        content: fieldContent
      })
      const markup = '<div class="some-class">' + fieldContent + '</div>'

      expect(fieldString).toEqual(markup)
    })
  })

  describe('formFieldGroup', () => {
    const fields = [
      '<input id="range-input" name="range-input-name" step="42" type="range" />',
      '<input type="text" />'
    ]

    it('should return field group container div with default class names applied and nested given form fields', () => {
      const fieldGroupString = formFieldGroup({ fields })
      const markup =
        '<div class="field-group">' +
        `<div class="field">${fields[0]}</div><div class="field">${fields[1]}</div>` +
        '</div>'

      expect(fieldGroupString).toEqual(markup)
    })

    it('should return field group container div with given class names applied and nested given form fields', () => {
      const fieldGroupString = formFieldGroup({
        containerClass: 'form-fields',
        fieldContainerClass: 'form-field',
        fields
      })
      const markup =
        '<div class="form-fields">' +
        `<div class="form-field">${fields[0]}</div><div class="form-field">${fields[1]}</div>` +
        '</div>'

      expect(fieldGroupString).toEqual(markup)
    })
  })

  describe('rangeDisplayValue', () => {
    const rangeValues = [0, 100]

    it('should return range values custom html markup string with given range values and default container class name', () => {
      const rangeDisplayValueString = rangeDisplayValue({ rangeValues })
      const markup =
        '<div class="range__values">' +
        `<span>${rangeValues[0]}</span><span>${rangeValues[1]}</span>` +
        '</div>'

      expect(rangeDisplayValueString.replace(/\s{2,}/g, '')).toMatch(markup)
    })

    it('should return range values custom html markup string with given range values and default container class name', () => {
      const rangeDisplayValueString = rangeDisplayValue({
        containerClass: 'range-values',
        rangeValues
      })
      const markup =
        '<div class="range-values">' +
        `<span>${rangeValues[0]}</span><span>${rangeValues[1]}</span>` +
        '</div>'

      expect(rangeDisplayValueString.replace(/\s{2,}/g, '')).toMatch(markup)
    })
  })
})
