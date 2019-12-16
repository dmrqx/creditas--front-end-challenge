import { parseElementAttributes } from '../../helpers'

export default function baseOption ({ textContent, ...attributes }) {
  return `<option ${parseElementAttributes({
    ...attributes
  })}>${textContent}</option>`
}
