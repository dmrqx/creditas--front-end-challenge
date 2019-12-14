import { RangeFormControl } from '../elements/templates'
import { registerTemplates } from '../elements/utils'

import baseTenRangeFormControl from '../elements/presets/baseTenRangeFormControl'

export default class CreditasLoanCalculator {
  static initialize () {
    this.registerElementTemplates()
    const rangeInput = baseTenRangeFormControl({
      inputName: 'test-input',
      nominalRangeValues: [24.0, 72.0]
    })

    document.body.appendChild(rangeInput)
  }

  static registerElementTemplates () {
    const relatedElementTemplates = [
      RangeFormControl
    ]

    registerTemplates({ templates: relatedElementTemplates })
  }
}
