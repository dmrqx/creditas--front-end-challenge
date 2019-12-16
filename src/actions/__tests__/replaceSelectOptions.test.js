import { replaceSelectOptions } from '../../actions'

const stringOptions = ['10', '20', '30']
const objectOptions = [
  {
    textContent: 'Amarelo',
    value: 'pimentao'
  },
  {
    textContent: 'Laranja',
    value: 'cenoura'
  },
  {
    textContent: 'Vermelho',
    value: 'tomate'
  }
]

function initializeAppMock () {
  document.body.innerHTML = `
      <select name="mock-select">
        <option value="a">a</option>
        <option value="b">b</option>
        <option value="c">c</option>
        <option value="d">d</option>
        <option value="e">e</option>
      </select>
    `
}

function clean () {
  document.body.innerHTML = ''
}

describe('Action: replaceSelectOptions', () => {
  beforeEach(() => {
    initializeAppMock()
  })

  afterEach(() => {
    clean()
  })

  it('should remove current select input options', () => {
    const selectElement = document.querySelector('select')
    let currentChildren = [...selectElement.children]

    replaceSelectOptions({ selectElement, options: stringOptions })

    expect([...selectElement.children]).toEqual(
      expect.not.arrayContaining(currentChildren)
    )

    currentChildren = [...selectElement.children]

    replaceSelectOptions({ selectElement, options: objectOptions })

    expect([...selectElement.children]).toEqual(
      expect.not.arrayContaining(currentChildren)
    )
  })

  it('should create option with value attribute same as textContent when options are of type string', () => {
    const selectElement = document.querySelector('select')

    replaceSelectOptions({ selectElement, options: stringOptions })

    const currentChildren = [...selectElement.children]
    const childrenAttributes = currentChildren.map(
      ({ textContent, value }) => ({ textContent, value })
    )

    expect(currentChildren).toHaveLength(stringOptions.length)
    expect(childrenAttributes).toEqual(
      expect.arrayContaining(
        stringOptions.map(option => ({ textContent: option, value: option }))
      )
    )
  })

  it('should create option with given attributes when options are of type object', () => {
    const selectElement = document.querySelector('select')

    replaceSelectOptions({ selectElement, options: objectOptions })

    const currentChildren = [...selectElement.children]
    const childrenAttributes = currentChildren.map(
      ({ textContent, value }) => ({ textContent, value })
    )

    expect(currentChildren).toHaveLength(objectOptions.length)
    expect(childrenAttributes).toEqual(expect.arrayContaining(objectOptions))
  })
})
