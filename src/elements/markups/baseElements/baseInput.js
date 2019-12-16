import { parseElementAttributes } from '../../helpers'

export default function baseInput ({ ...attributes }) {
  return `<input ${parseElementAttributes({ ...attributes })} />`
}
