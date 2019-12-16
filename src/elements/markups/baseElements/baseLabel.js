import { parseElementAttributes } from '../../helpers'

export default function baseLabel ({ textContent, ...attributes }) {
  return `<label ${parseElementAttributes({
    ...attributes
  })}>${textContent}</label>`
}
