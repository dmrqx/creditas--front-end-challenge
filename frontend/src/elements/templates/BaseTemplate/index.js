import { createElementTree } from '../../utils'

export default class BaseTemplate {
  static create () {
    return createElementTree({
      tagName: 'template',
      className: this.templateName,
      children: this.childrenElements
    })
  }

  static register () {
    const parentNode = this.parentNode || document.body
    parentNode.appendChild(this.templateElement)
  }

  static deepClone () {
    const templateNode = document.querySelector(`.${this.templateName}`)
    return templateNode.cloneNode(true)
  }
}
