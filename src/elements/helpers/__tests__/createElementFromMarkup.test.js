/* global HTMLDivElement */

import { createElementFromMarkup } from '../../helpers'

const markupMock = `
        <div class="mock-element">
          <span class="mock-children">a</span>
          <span class="mock-children">b</span>
          <span class="mock-children">c</span>
          <span class="mock-children">d</span>
          <span class="mock-children">e</span>
        </div>
      `.trim()

function clean () {
  document.body.innerHTML = ''
}

describe('Helper: createElementFromMarkup', () => {
  afterEach(() => {
    clean()
  })

  it('should return a document fragment matching given markup string', () => {
    const fragment = createElementFromMarkup({ markup: markupMock })
    const divElement = fragment.querySelector('.mock-element')

    const childrenElements = divElement.children
    const expectedChildrenLength = markupMock.split('\n').slice(1, -1).length

    expect(divElement).toBeInstanceOf(HTMLDivElement)
    expect(childrenElements).toHaveLength(expectedChildrenLength)
  })
})
