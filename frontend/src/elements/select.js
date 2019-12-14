/* global HTMLSelectElement */

export default class Select extends HTMLSelectElement {
  static create ({ controlName, options, ...attributes }) {
    const element = document.createElement('SELECT')
    ;['name', 'id'].forEach(attr => { element[attr] = controlName })

    this.registerOptions(options)
  }

  static registerOptions (options) {

  }

  static addOption ({ label, value }) {
    const option = document.createElement('OPTION')
    option.label = label
    option.value = value
  }
}
