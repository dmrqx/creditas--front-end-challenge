import { baseInput, baseLabel, baseOption, baseSelect } from '../baseElements'

describe('Markup: baseElements', () => {
  describe('baseInput', () => {
    const inputAttributes = {
      id: 'range-input',
      name: 'range-input-name',
      step: 42,
      type: 'range'
    }

    it('should return an input html markup string with given attributes applied', () => {
      const inputString = baseInput({ ...inputAttributes })
      const markup =
        '<input id="range-input" name="range-input-name" step="42" type="range" />'

      expect(inputString).toEqual(markup)
    })
  })

  describe('baseLabel', () => {
    const labelAttributes = {
      htmlFor: 'range-input',
      textContent: 'Some label'
    }

    it('should return a label html markup string with given attributes and text content applied', () => {
      const labelString = baseLabel({ ...labelAttributes })
      const markup = '<label htmlFor="range-input">Some label</label>'

      expect(labelString).toEqual(markup)
    })
  })

  describe('baseOption', () => {
    const optionAttributes = {
      value: '42',
      textContent: 'The answer'
    }

    it('should return an option html markup string with given attributes and text content applied', () => {
      const optionString = baseOption({ ...optionAttributes })
      const markup = '<option value="42">The answer</option>'

      expect(optionString).toEqual(markup)
    })
  })

  describe('baseSelect', () => {
    const selectAttributes = {
      required: true
    }

    const initialOptions = [
      {
        value: '42',
        textContent: 'The answer'
      },
      { value: '333', textContent: 'Meio besta' }
    ]

    it('should return an empty select html markup string with given attributes if no initialOptions provided', () => {
      const selectString = baseSelect({ ...selectAttributes })
      const markup = '<select required="true"></select>'

      expect(selectString).toEqual(markup)
    })

    it('should return a select html markup string with given attributes and initialOptions when provided', () => {
      const selectString = baseSelect({ ...selectAttributes, initialOptions })
      const markup =
        '<select required="true"><option value="42">The answer</option><option value="333">Meio besta</option></select>'

      expect(selectString).toEqual(markup)
    })
  })
})
