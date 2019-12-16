import { baseOption } from '.'
import { parseElementAttributes } from '../../helpers'

export default function baseSelect ({ initialOptions = [], ...attributes }) {
  const parsedOptions = () =>
    initialOptions.length
      ? initialOptions.map(option => baseOption({ ...option })).join('')
      : ''

  return `<select ${parseElementAttributes({
    ...attributes
  })}>${parsedOptions()}</select>`
}
