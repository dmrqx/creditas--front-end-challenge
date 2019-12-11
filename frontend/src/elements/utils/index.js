export function createElement ({ tagName, ...attributes }) {
  const element = document.createElement(tagName)
  Object.entries(attributes).forEach(([attr, val]) => {
    element[attr] = val
  })

  return element
}

export function createElementTree ({ children, ...root }) {
  const rootElement = createElement(root)
  const isBranchParent = Array.isArray(children) && children.length

  if (isBranchParent) {
    children.map(createElementTree).forEach(childElement => {
      rootElement.appendChild(childElement)
    })
  }

  return rootElement
}

export function registerTemplates ({ templates }) {
  for (const template of templates) {
    if (template.templateName === undefined) {
      template.register()
    }
  }
}
