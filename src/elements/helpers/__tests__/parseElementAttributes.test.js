import { parseElementAttributes } from '../../helpers'

const attributesMock = {
  id: 'input-id',
  name: 'input-name',
  required: true
}

describe('Helper: parseElementAttributes', () => {
  it('should return a string of key value pairs in html attribute declaration format', () => {
    const attributesRegex = /([a-z]+="[a-z0-9-_]+")/g

    expect(parseElementAttributes(attributesMock)).toMatch(attributesRegex)
  })
})
